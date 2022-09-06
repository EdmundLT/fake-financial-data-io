const { validateSymbol } = require("./symbolValidation");

describe("Testing validateSymbol", () => {
  test("should return False if the symbol provided are not in database", async () => {
    const symbol = "TSLLA";
    const res = await validateSymbol(symbol);
    expect(res).toBe(false);
  });
  test('should return True if the symbol provided exists in database', async () => { 
    const symbol = "AAPL";
    const res = await validateSymbol(symbol);
    expect(res).toBe(true);
   })
});
