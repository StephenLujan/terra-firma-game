describe("Tile", () => {
    it('becomes more difficult to mine', () => {
        tile = new Tile(100, 1);
        let original_difficulty = tile.mining_difficulty;
        tile.minerals /= 2;
        expect(tile.mining_difficulty).toBeLessThan(original_difficulty);
    })
})