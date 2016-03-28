describe("Tile", () => {
    it('becomes more difficult to mine', () => {
        let tile = new Tile(100, 1);
        let original_difficulty = tile.miningDifficulty;
        tile.minerals /= 2;
        expect(tile.miningDifficulty).toBeLessThan(original_difficulty);
    })
})