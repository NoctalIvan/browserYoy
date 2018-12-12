import { ItemType } from "../enums/itemType";

export interface Item {
    type: ItemType
    level: number
    x: number,
    y: number
}