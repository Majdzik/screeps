var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var sources = creep.room.find(FIND_SOURCES);
	    if(creep.carry.energy < creep.carryCapacity && sources[0].energy > 0) {
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets=[];
            var targetsEXTENSION = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return structure.structureType == STRUCTURE_EXTENSION  && structure.energy < structure.energyCapacity;
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
            targets = creep.pos.findClosestByPath(targets);
            
            //Order By ID
            //targets = _.sortByOrder(targets, ['id'], ['desc'])
            if(targets ) {
                if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;