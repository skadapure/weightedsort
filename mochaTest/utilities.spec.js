const func = require('../utilities');
const expect = require('chai').expect;
describe("Main Test", () => {
  it("Test Sum", (done) => {
      const result = func.sum(128);
      expect(result).to.equal(11);
      done();
    }
  );
  it("Test is Higher", (done) => {
      const result = func.isHigher(128, 1024);
      expect(result).to.equal(true);
      done();
    }
  );
  it("Test is Lower", (done) => {
      const result = func.isHigher(1024, 128);
      expect(result).to.equal(false);
      done();
    }
  );
});