export enum CreepType {
    Miner = 0,
    Hauler,
    Builder,
    Repairer,
    Upgrader,
    Carrier,
    Soldier,
    Shooter,
    Scout,
    Healer
}

interface ICreepAbilitie {
    //new (level:number, abilitie:string[]):AICreepAbilitie;

    level: number;
    abilitie: string[];
    cost(): number;
}

export class CreepAbilitie implements ICreepAbilitie {
    constructor(level: number, abilitie: string[]) {
        this.level = level;
        this.abilitie = abilitie;
    }

    public cost(): number {
        let sum: number = 0;

        for (let name of this.abilitie) {
            sum += BODYPART_COST[name];
        }

        return sum;
    }

    public level: number;
    public abilitie: string[];
}

interface ICreepAdv {
    //new (type:CreepType, abilitie:ICreepAbilitie):ICreepAdv;
    Type: CreepType;
    Abilitie: CreepAbilitie[];
}

export class CreeperAdv implements ICreepAdv {
    constructor(type: CreepType, abilitie: CreepAbilitie[]) {
        this.Type = type;
        this.Abilitie = abilitie;
    }

    public Type: CreepType;
    public Abilitie: CreepAbilitie[];

}

export class CreepAbilities {
    public Get(type: CreepType, level: number): CreepAbilitie {

        let AbilitieList: any = [
            new CreeperAdv(CreepType.Miner,
                [
                    new CreepAbilitie(1, [WORK, CARRY, MOVE]),
                    new CreepAbilitie(2, [WORK, WORK, CARRY, MOVE]),
                    new CreepAbilitie(3, [WORK, WORK, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(4, [WORK, WORK, WORK, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(5, [WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(6, [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(7, [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(8, [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(9, [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(10, [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE])
                ]),
            new CreeperAdv(CreepType.Builder,
                [
                    new CreepAbilitie(1, [WORK, CARRY, MOVE]),
                    new CreepAbilitie(2, [WORK, WORK, CARRY, MOVE]),
                    new CreepAbilitie(3, [WORK, WORK, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(4, [WORK, WORK, WORK, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(5, [WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(6, [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(7, [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(8, [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(9, [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(10, [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE])
                ]),
            new CreeperAdv(CreepType.Carrier,
                [
                    new CreepAbilitie(1, [CARRY, MOVE]),
                    new CreepAbilitie(2, [CARRY, CARRY, MOVE]),
                    new CreepAbilitie(3, [CARRY, CARRY, MOVE, MOVE]),
                    new CreepAbilitie(4, [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(5, [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(6, [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(7, [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(8, [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(9, [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]),
                    new CreepAbilitie(10, [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE])
                ]),
            new CreeperAdv(CreepType.Soldier,
                [
                    new CreepAbilitie(1, [TOUGH, ATTACK, MOVE]),
                    new CreepAbilitie(2, [TOUGH, MOVE, ATTACK, MOVE]),
                    new CreepAbilitie(3, [TOUGH, MOVE, ATTACK, ATTACK, ATTACK, MOVE]),
                    new CreepAbilitie(4, [TOUGH, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, MOVE]),
                    new CreepAbilitie(5, [TOUGH, TOUGH, TOUGH, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE]),
                    new CreepAbilitie(6, [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE]),
                    new CreepAbilitie(7,
                        [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE]),
                    new CreepAbilitie(8,
                        [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE]),
                    new CreepAbilitie(9,
                        [
                            TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                            MOVE
                        ]),
                    new CreepAbilitie(10,
                        [
                            TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
                            ATTACK, MOVE
                        ])
                ]),
            new CreeperAdv(CreepType.Shooter,
                [
                    new CreepAbilitie(5, [TOUGH, TOUGH, TOUGH, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE]),
                    new CreepAbilitie(6, [TOUGH, TOUGH, TOUGH, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE]),
                    new CreepAbilitie(7, [TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE]),
                    new CreepAbilitie(8,
                        [TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE]),
                    new CreepAbilitie(9,
                        [
                            TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
                            MOVE
                        ]),
                    new CreepAbilitie(10,
                        [
                            TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
                            RANGED_ATTACK, MOVE
                        ])
                ]),
            new CreeperAdv(CreepType.Scout,
                [
                    new CreepAbilitie(0, [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE])
                ]),
            new CreeperAdv(CreepType.Healer,
                [
                    new CreepAbilitie(0, [MOVE, MOVE, MOVE, HEAL, MOVE])
                ])
        ];
        let typeAdv: CreepAbilitie = AbilitieList.find((adv: CreeperAdv) => { return adv.Type === type })
            .Abilitie.find((a: CreepAbilitie) => { return a.level === level }); //.abilitie;

        return typeAdv;

        //var aaaa=new CreeperAdv();
        //let A:aaaaaaaaaaaaaaaaaaaaaaaa = {0:new CreeperAdv()};

        //let abilities: Array<string> = [];
        //switch (type) {
        //    case CreepType.Miner:
        //    case CreepType.Builder:
        //        if (level <= 1) {
        //            abilities = [WORK, CARRY, MOVE];
        //        } else if (level <= 2) {
        //            abilities = [WORK, WORK, CARRY, MOVE];
        //        } else if (level <= 3) {
        //            abilities = [WORK, WORK, CARRY, MOVE, MOVE];
        //        } else if (level <= 4) {
        //            abilities = [WORK, WORK, WORK, CARRY, MOVE, MOVE];
        //        } else if (level <= 5) {
        //            abilities = [WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE];
        //        } else if (level <= 6) {
        //            abilities = [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE];
        //        } else if (level <= 7) {
        //            abilities = [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE];
        //        } else if (level <= 8) {
        //            abilities = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE];
        //        } else if (level <= 9) {
        //            abilities = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE];
        //        } else if (level >= 10) {
        //            abilities = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE];
        //        }
        //        break;
        //    case CreepType.Carrier:
        //        if (level <= 1) {
        //            abilities = [CARRY, MOVE];
        //        } else if (level <= 2) {
        //            abilities = [CARRY, CARRY, MOVE];
        //        } else if (level <= 3) {
        //            abilities = [CARRY, CARRY, MOVE, MOVE];
        //        } else if (level <= 4) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
        //        } else if (level <= 5) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
        //        } else if (level <= 6) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        //        } else if (level <= 7) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        //        } else if (level <= 8) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        //        } else if (level <= 9) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        //        } else if (level >= 10) {
        //            abilities = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        //        }
        //        break;
        //    case CreepType.Soldier:
        //        if (level <= 1) {
        //            abilities = [TOUGH, ATTACK, MOVE];
        //        } else if (level <= 2) {
        //            abilities = [TOUGH, MOVE, ATTACK, MOVE];
        //        } else if (level <= 3) {
        //            abilities = [TOUGH, MOVE, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level <= 4) {
        //            abilities = [TOUGH, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level <= 5) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level <= 6) {
        //            abilities = [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level <= 7) {
        //            abilities = [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level <= 8) {
        //            abilities = [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level <= 9) {
        //            abilities = [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        } else if (level >= 10) {
        //            abilities = [TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE];
        //        }
        //        break;
        //    case CreepType.Shooter:
        //        if (level <= 5) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, RANGED_ATTACK, RANGED_ATTACK, MOVE];
        //        } else if (level <= 6) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE];
        //        } else if (level <= 7) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE];
        //        } else if (level <= 8) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE];
        //        } else if (level <= 9) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE];
        //        } else if (level >= 10) {
        //            abilities = [TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE];
        //        }
        //        break;
        //    case CreepType.Scout:
        //        abilities = [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
        //        break;
        //    case CreepType.Healer:
        //        abilities = [MOVE, MOVE, MOVE, HEAL, MOVE];
        //        break;
        //    default:
        //}

        //return abilities;
    }
}