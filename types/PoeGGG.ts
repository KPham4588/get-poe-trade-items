export interface Stash {
    stashes: StashTab[];
  }
  
  export interface StashTab {
    id: string;
    name: string;
    type: string;
    index: number;
    metadata: Metadata;
    children?: StashTab[];
  }
  
  export interface StashTabWithItems extends Stash {
    items?: Item[];
    children?:
      | StashTabWithItems
      | { metadata: { public: boolean; items: number; map: MapStashItem } }[];
    type: string;
  }
  
  export interface MapStashItem {
    section: string;
    name: string;
    image: string;
    tier: number;
  }
  
  export interface Item {
    verified: boolean;
    w: number;
    h: number;
    icon: string;
    stackSize?: number;
    maxStackSize: number;
    league: string;
    id: string;
    name: string;
    typeLine: string;
    baseType: string;
    identified: boolean;
    ilvl: number;
    logbookMods: {
      name?: string;
      faction: { id: string; name: string };
      mods: string[];
    }[];
    properties: Property[];
    explicitMods: string[];
    implicitMods: string[];
    enchantMods: string[];
    sockets?: { group: number; attr: string; sColour: string }[];
    descrText?: string;
    flavourText?: string[];
    frameType: number;
    x: number;
    y: number;
    inventoryId: string;
    note?: string;
    corrupted?: boolean;
  }
  
  export interface Property {
    name: Name;
    values: Array<Array<number | string>>;
    displayMode: number;
    type: number;
  }
  
  export enum Name {
    wingsRevealed = 'Wings Revealed',
    AreaLevel = 'Area Level',
    StackSize = 'Stack Size',
    Level = 'Level',
    Quality = 'Quality',
  }
  
  export interface Metadata {
    public?: boolean;
    colour: string;
    map?: Map;
  }
  
  export interface Map {
    series: number;
  }
  
  export interface Token {
    access_token: string;
    expires_in: number;
    token_type: 'bearer';
    scope: string;
    username: string;
    sub: string;
    refresh_token: string;
  }
  
  export interface Character {
    id: string;
    name: string;
    class: string;
    league: string;
    level: number;
    experience: number;
    current?: true;
  }