import * as assert from 'assert'
import { HexBoard } from './../../src/classes/HexBoard'
import { HexTile } from '../../src/classes/HexTile';
import { Coordinates } from '../../src/classes/Coordinates';

const board = new HexBoard()
board.tiles = [[1,1,2],[2,2,1],[1,1,1]].map((l,y) => l.map((i,x) => new HexTile(i, new Coordinates(x,y))))

describe('HexBoard', () => {
    it('getRegion', () => {
        const r1 = board.getRegion(new Coordinates(0,0))
        // const r2 = board.getRegion(new Coordinates(1,1))
        // const r3 = board.getRegion(new Coordinates(2,2))

        // console.log({r1,r2,r3})
        console.log(JSON.stringify(r1, null, 2))
    })
})