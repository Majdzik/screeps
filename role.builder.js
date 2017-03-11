var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
	        //creep.memory.buildingOnId = creep.memory.buildingOnId || targets[0].id;// Game.getObjectById();
	        
	        //Game.getObjectById('42ec4adea2dbb6e').progress progressTotal
	        
	        //console.log('targets:',targets);
            if(targets) {
                if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                    //console.log('woorking on',creep.memory.buildingOnId);
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
              
              var roadToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: function(object){
            return object.structureType === STRUCTURE_ROAD && (object.hits < object.hitsMax);
        } 
    });
    if (roadToRepair){
        if(!creep.pos.isNearTo(roadToRepair))
            {
                creep.moveTo(roadToRepair);
            }
            else{
        creep.repair(roadToRepair);
        
        creep.say('repair');}

        // perhaps check the results again?

    } else {

        // nothing to repair, let's do something else?
         creep.moveTo(35,22, {visualizePathStyle: {stroke: '#ff00ff'}});

    }
              
               
            }
	    }
	    else //if(!creep.memory.building && creep.carry.energy == 0) 
	    {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	   // else{
	   //      //Move to Default PLAZA
       //             creep.moveTo(35,22, {visualizePathStyle: {stroke: '#ff00ff'}});
	   // }
	}
};

module.exports = roleBuilder;