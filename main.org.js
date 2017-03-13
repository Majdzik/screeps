var workModel =[WORK, CARRY, MOVE],
    warriorModel=[],
    loops=0;
var gfn = require('gfn');
var constants = require('constants');
var roleHarvester = require('role.harvester');
var roleHarvester2 = require('role.harvester2');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

    

module.exports.loop = function () {
    var harvesters, harvesters2, upgraders, builders, extensionCount = 0;
    for(var roomName in Game.rooms) {
        extensionCount += Game.rooms[roomName].find(FIND_MY_STRUCTURES,{
            filter: (object)=>{return object.structureType === STRUCTURE_EXTENSION;}
        }).length;
    }
    
    // var extentions = Game.structures.find(FIND_STRUCTURES,{
    //     filter: function(object){
    //         return object.structureType === STRUCTURE_EXTENSION;
    //     } 
    // }).length;
    // console.log('ex~lvl:',extentions);
      harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
      harvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
      upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
      builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            //harvesters++;
        }
         if(creep.memory.role == 'harvester2') {
            roleHarvester2.run(creep);
            //harvesters++;
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            //upgraders++;
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            //builders++;
        }
    }
    // savoir
    if(Game.creeps.length<1){
         Game.spawns['gate'].createCreep([
            WORK, CARRY, MOVE,    
        ], null, {role: 'harvester'});
    }
    if(harvesters.length < 1 ){
        Game.spawns['gate'].createCreep([
            WORK, CARRY, MOVE,    
            WORK, MOVE, MOVE, MOVE,          
            WORK, MOVE 
        ], null, {role: 'harvester'});
    }
    else if(harvesters2.length < 2 ){
        var zero = _.filter(Game.creeps, (creep) => creep.memory.random == 0).length,
        one = _.filter(Game.creeps, (creep) => creep.memory.random == 1).length;
        Game.spawns['gate'].createCreep([
            WORK, CARRY, MOVE,    
            WORK, MOVE, MOVE, MOVE,          
            WORK, MOVE 
        ], null, {role: 'harvester2', random: zero>one?1:0 });
    }
    else if(upgraders.length < 4){
        Game.spawns['gate'].createCreep([
            WORK, CARRY, MOVE,     
            WORK, CARRY, MOVE, MOVE, MOVE,    
            WORK, WORK, CARRY, MOVE
            ], null, {role: 'upgrader'});
    }
    else if(builders.length < 1 ){
        Game.spawns['gate'].createCreep([
            WORK, CARRY, MOVE,   
            WORK, CARRY, CARRY, MOVE,        
            WORK, WORK, CARRY, MOVE,   
            ], null, { role: 'builder'});
    }
    
    if(Game.spawns['gate'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['gate'].spawning.name];
        Game.spawns['gate'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['gate'].pos.x + 1, 
            Game.spawns['gate'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
    //War
      var tower = Game.getObjectById('f1cc51147b2cb46');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    
    
    //console.log('harvesters:',harvesters.length,' upgraders:',upgraders.length,' builders:',builders.length);
    
    if(loops >= 60){
        //Clean
         for(var name in Memory.creeps) {
                if(!Game.creeps[name]) {
                    delete Memory.creeps[name];
                    console.log('Clearing non-existing creep memory:', name);
                }
            }
        
        //Looging
        console.log('harvesters:',harvesters.length,' harvesters2:',harvesters2.length,' upgraders:',upgraders.length,' builders:',builders.length, ' extensionCount:',extensionCount);
        loops=0;
    }
   loops++;
}
//Game.spawns['gate'].createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});
//Game.spawns['gate'].createCreep([WORK, CARRY, MOVE], null, {role: 'upgrader'});
//Game.spawns['gate'].createCreep([WORK, CARRY, MOVE], null, { role: 'builder'});

//SAFE MODE
//Game.spawns['gate'].room.controller.activateSafeMode();

//Tower
//Game.spawns['gate'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

