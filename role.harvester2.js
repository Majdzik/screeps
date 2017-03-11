/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester2');
 * mod.thing == 'a thing'; // true
 */
//W1N5
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        //return;
        
        if(creep.carry.energy < creep.carryCapacity)
        { 
            if(creep.room.name === 'W1N5'){
                    creep.moveTo(new RoomPosition(26, 0, 'W1N4'), {visualizePathStyle: {stroke: '#ffffff'}});
                }
            else if(creep.room.name === 'W1N4'){
                 var sources = creep.room.find(FIND_SOURCES);
                 sources = _.sortByOrder(sources, ['id'], ['desc']);
                 
                //  if(!creep.memory.random){
                //     creep.memory.random= Math.round(Math.random());
                //  }
                  //console.log('creep: ',creep.name,' ran:',creep.memory.random)
        	    if(creep.carry.energy < creep.carryCapacity && sources[creep.memory.random].energy > 0) {
                    if(creep.harvest(sources[creep.memory.random]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[creep.memory.random], {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
                }
            }
                
        }
        else{
            if(creep.room.name === 'W1N4'){
                    creep.moveTo(new RoomPosition(26, 49, 'W1N5'), {visualizePathStyle: {stroke: '#ffffff'}});
                }
                else{
                    var targets=[];
            var targetsEXTENSION = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION //||structure.structureType == STRUCTURE_SPAWN ||structure.structureType == STRUCTURE_TOWER
                        ) && structure.energy < structure.energyCapacity;
                    }
            });
            
            var targetsSPAWN  = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_SPAWN  && structure.energy < structure.energyCapacity;
                    }
            });
            
            var targetsTOWER = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity;
                    }
            });
            
             var targetsTOWER = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_STORAGE && structure.energy < structure.energyCapacity;
                    }
            });
            
            //Sum Arry in prio order
            targets = targetsEXTENSION.concat(targetsSPAWN,targetsTOWER);
            targets=creep.pos.findClosestByPath(targets);
            
            //Order By ID
            //targets = _.sortByOrder(targets, ['id'], ['desc'])
            if(targets) {
                if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
                }
        }
	}
};

module.exports = roleHarvester;