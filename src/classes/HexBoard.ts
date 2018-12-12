import { HexTile } from "./HexTile";
import { Item } from "./Item";
import { Coordinates } from "./Coordinates";

export class HexBoard {
    tiles: HexTile[][]
    items: Item[]

    getTile(coords:Coordinates):HexTile {
        return this.tiles[coords.y] && this.tiles[coords.y][coords.x]
    }

    getRegion(coords:Coordinates):HexTile[] {
        const tile = this.getTile(coords)
        
        const region = []
        const processed = new Set()
        const toProcess = [tile]
        while(toProcess.length > 0) {
            const processTile = toProcess.pop()
            if(processed.has(processTile.coords)){
                continue
            }

            processed.add(processTile.coords)
            region.push(processTile)

            processTile.getNear()
                .map(coords => this.getTile(coords))
                .filter(newTile => newTile && newTile.color == tile.color)
                .forEach(newTile => {
                    toProcess.push(newTile)
                })
        }

        return region
    }

    canPlaceItem(color:number, coords:Coordinates) {
        // check tile & tile color
        const tile = this.getTile(coords)
        if(!tile || tile.color != color) {
            return false
        }

        // check other units
        if(this.items.some(item => item.coords.equals(coords))) {
            return false
        }

        return true
    }
}