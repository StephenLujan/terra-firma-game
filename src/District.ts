abstract class District {
    protected _labor:number;

    constructor(labor:number = 0, public infrastructure:Array<number> = [0.1]) {
        this.labor = labor;
    }

    /* TODO: contracts
    @In((labor: number) => {
        assert(labor >= 0);
        assert(labor <= this.getMaxLabor())
    })
    */
    set labor(labor: number) {
        this._labor = labor;
    }

    get labor() {
        return this._labor;
    }

    public abstract getMaxLabor();
}