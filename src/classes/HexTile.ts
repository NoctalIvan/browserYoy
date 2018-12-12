import { Coordinates } from "./Coordinates";

export class HexTile {
    color:number
    coords:Coordinates

    constructor(color:number, coords:Coordinates) {
        this.color = color
        this.coords = coords
    }

    getNear() {
        return this.coords.getNear()
    }
}