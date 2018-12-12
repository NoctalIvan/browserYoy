export class Coordinates {
    x: number
    y: number

    constructor(x:number, y:number) {
        this.x = x
        this.y = y
    }

    getNear():Coordinates[] {
        return [
            new Coordinates(this.x - 1, this.y),
            new Coordinates(this.x + 1, this.y),
            new Coordinates(this.x, this.y - 1),
            new Coordinates(this.x, this.y + 1),
            this.y % 2 ? new Coordinates(this.x + 1, this.y - 1) : new Coordinates(this.x - 1, this.y - 1),
            this.y % 2 ? new Coordinates(this.x + 1, this.y + 1) : new Coordinates(this.x - 1, this.y + 1),
        ]
    }

    serialize():string {
        return `(${this.x}/${this.y})`
    }

    equals(other:Coordinates) {
        return this.x == other.x && this.y == other.y
    }
}