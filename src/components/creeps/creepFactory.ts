import {CreepType, CreepAbilitie, CreeperAdv, CreepAbilities} from './creepType';

export class CreepFactory {
    constructor() {
        console.log('hhhhmmm');
    }

    public New (creepType:CreepType, spawn?:Spawn) {
        let levl: number=0,
            abilities: CreepAbilitie;
        levl=5;
        if(levl === 0)
            abilities = CreepAbilities.prototype.Get(creepType, 0);
        if (levl < 10)
            abilities = CreepAbilities.prototype.Get(creepType, levl);
        else
            abilities = CreepAbilities.prototype.Get(creepType, levl);
        console.log('abilities',abilities.level, abilities.abilitie,abilities.cost()); 
    }
}