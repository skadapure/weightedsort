const expect = require('chai').expect;
const sort = require('../sort');
const str = "1024 65536 8192 128 256 256 512 2048 4096 16384, 32768";
const arr = str.split(' ').map(item => parseInt(item));
describe("Sort", () => {
  it("Test Sort", (done) => {
      const result = sort(arr);
      expect(result).to.deep.equal([1024, 512, 128, 256, 256, 2048, 4096, 8192, 16384, 65536, 32768]);
      done();
    }
  );
});
