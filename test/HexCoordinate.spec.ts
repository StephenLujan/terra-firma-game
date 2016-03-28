describe('HexCoordinate', ()=> {
    it('has 3 coordinates whose sum equals 0', ()=> {
        let hex = new HexCoordinate(1, 1);
        expect(hex.x + hex.y + hex.z).toBe(0);
    });
    it('has 6 neighbors', ()=> {
        let hex = new HexCoordinate(1, 1);
        expect(hex.neighbors.length).toBe(6);
    });
    it('can measure distance', ()=> {
        let hex1 = new HexCoordinate(1, 1);
        let hex2 = new HexCoordinate(1, 2);
        let hex3 = new HexCoordinate(2, 2);
        expect(hex1.distanceTo(hex2)).toBe(1);
        expect(hex2.distanceTo(hex3)).toBe(1);
        expect(hex1.distanceTo(hex3)).toBe(2);
    });
    it('neighbors are all at a distance of 1', ()=> {
        let hex = new HexCoordinate(1, 1);
        hex.neighbors.forEach((neighbor)=> {
            expect(hex.distanceTo(neighbor)).toBe(1);
        });
    });
});