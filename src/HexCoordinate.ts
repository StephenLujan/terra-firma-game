/**
 * Three axis based position within a hexagon grid.
 * [See online explanation of hexagon grid]
 * {@link http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/}
 */
class HexCoordinate {
    constructor(public x:number, public y:number) {
    }

    get z():number {
        return 0 - this.x - this.y;
    }

    get neighbors():HexCoordinate[] {
        return [
            new HexCoordinate(this.x + 1, this.y),
            new HexCoordinate(this.x + 1, this.y - 1),
            new HexCoordinate(this.x, this.y - 1),
            new HexCoordinate(this.x - 1, this.y),
            new HexCoordinate(this.x - 1, this.y + 1),
            new HexCoordinate(this.x, this.y + 1)
        ]
    }
    distanceTo(other : HexCoordinate): number{
        return Math.max(
            Math.abs(this.x - other.x),
            Math.abs(this.y - other.y),
            Math.abs(this.z - other.z)
        );
    }

    /**
     * expresses hex coordinates as coordinates in traditional cartesian (square grid) system
     * note: the y and x axis are not scaled accurately
     */
    toCartesian(): number[] {
        return [this.x * 2.0 + this.y, this.y * 2.0]
    }
}