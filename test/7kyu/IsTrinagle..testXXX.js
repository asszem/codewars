
describe("Public tests", () => {
  it("should return ture when is Triangle: 1, 2, 2", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
  });
  it("should return false when is NOT Triangle: 7, 2, 2", () => {
    assert.strictEqual(isTriangle(7,2,2), false);
  });
  it("Should return false if any number is lower than ", () => {
    assert.strictEqual(isTriangle(-1,2,2), false);
    assert.strictEqual(isTriangle(-1,-12,2), false);
    assert.strictEqual(isTriangle(-1,2,-12), false);
    assert.strictEqual(isTriangle(0,0,-12), false);
  });
  it("Should return false when any parameter is missing", () => {
    assert.strictEqual(isTriangle(-1,2), false);
    assert.strictEqual(isTriangle(-1), false);
    assert.strictEqual(isTriangle(), false);
  });
  it("Should return false when any parameter is not number", () => {
    assert.strictEqual(isTriangle(-1,2), false);
    assert.strictEqual(isTriangle(-1), false);
    assert.strictEqual(isTriangle(), false);
  });
})