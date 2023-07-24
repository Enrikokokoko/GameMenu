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
}