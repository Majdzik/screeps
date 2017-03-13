interface Memory {
  uuid: number;
  log: any;
}

declare function require(path: string): any;

interface IGlobal {
  log: any;
}

declare var global: IGlobal;