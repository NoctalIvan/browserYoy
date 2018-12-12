import { ItemType } from "../enums/itemType";
import { Coordinates } from "./Coordinates";

export interface Item {
    type: ItemType
    level: number
    coords: Coordinates
}