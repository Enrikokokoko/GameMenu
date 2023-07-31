export interface Hero {
    id: number;
    img_icon: string;
    screen: string;
    creationDate?: Date;
    name: string;
    isEmpty: boolean;
}

export interface Slots {
    slotId: number;
    hero: Hero | null;
    saveData: Date | null;
    img: string;
    timer: any;
    passage: string;
    start?: number;
    storageTime?: string;
}

export interface loadSlots {
    slotId: number;
    saveData: Date;
    hero: Hero;
    passage: string;
    img_boss: string;
    lvl_name: string;
    boss_name: string;
}