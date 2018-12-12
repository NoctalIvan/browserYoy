import { HexTile } from "./HexTile";
import { Item } from "./Item";
import { Coordinates } from "./Coordinates";

export class HexBoard {
    tiles: HexTile[][]
    items: Item[]

    getRegion(coords:Coordinates) {
        const tile = this.tiles[coords.x][coords.y]
        const color = tile.color
        
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
                .map(coords => this.tiles[coords.x] && this.tiles[coords.x][coords.y])
                .filter(newTile => newTile && newTile.color == color)
                .forEach(newTile => {
                    toProcess.push(newTile)
                })
        }

        return region
    }
}