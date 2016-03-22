class Mine extends District{
    public static MAX_LABOR = 1.0;

    constructor(labor:number = 0, public infrastructure:Array<number> = [0.1]) {
        super(labor, infrastructure);
    }

    public getMaxLabor() : Number
    {
        return Mine.MAX_LABOR;
    }

    get strength() {
        return this.labor;
    }
}