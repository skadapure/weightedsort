const func = require('../utilities');

describe("Main Test", () => {
  it("Test Sum", () => {
      const result = func.sum(128);
      expect(result).toBe(11);
    }
  );
  it("Test is Higher", () => {
      const result = func.isHigher(128, 1024);
      expect(result).toBe(true);
    }
  );
  ;
  it("Test is Lower", () => {
      const result = func.isHigher(1024, 128);
      expect(result).toBe(false);
    }
  );
});