import * as assert from 'assert'
import { Coordinates } from '../../src/classes/Coordinates';

describe('Coordinates', () => {
    describe('getNear', () => {
        it('even', () => {
            const near = new Coordinates(2,2).getNear().sort((a,b) => a.x == b.x ? a.y - b.y : a.x - b.x).map(a => a.serialize())
            assert.deepEqual(near, [ '(1/1)', '(1/2)', '(1/3)', '(2/1)', '(2/3)', '(3/2)' ])
        })
        it('odd', () => {
            const near = new Coordinates(2,1).getNear().sort((a,b) => a.x == b.x ? a.y - b.y : a.x - b.x).map(a => a.serialize())
            assert.deepEqual(near, [ '(1/1)', '(2/0)', '(2/2)', '(3/0)', '(3/1)', '(3/2)' ])
        })
    })
})