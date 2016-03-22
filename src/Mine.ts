class Mine {
    public static MAX_LABOR = 1.0;
    private _labor:number;

    constructor(labor:number = 0, public infastructure:Array<number> = [0.1]) {
        this._labor = Math.min(labor, Mine.MAX_LABOR);
    }

    set labor(labor:number) {
        this.labor = Math.max(Mine.MAX_LABOR, labor)
    }

    get labor() {
        return this._labor
    }

    get strength() {
        return this.labor;
    }
}