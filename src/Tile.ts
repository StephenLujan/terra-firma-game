class Tile {
    private _original_minerals:number;

    constructor(public minerals:number, public hostility:number) {
        this._original_minerals = minerals;
    }

    get mining_difficulty() {
        return (this.minerals / this._original_minerals)**2;
    }
}

