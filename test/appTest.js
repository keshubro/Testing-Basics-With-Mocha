const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();
const app    = require("../app");

describe("App", function(){
    it("should test if function returns 1+2 = 3", function(){
        // assert.equal(app(1,2), 3, "yoyo");
        // expect(app(1, 2)).to.equal(3);
        app(1, 2).should.equal(3);
    });
    it("should test if function returns -3+2 = -1", function(){
        // assert.equal(app(-3,2), -1);
        // expect(app(-3, 2)).to.equal(-1);
        app(-3, 2).should.equal(-1);
    });
});
