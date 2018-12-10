const expect = require("chai").expect;
const sinon = require('sinon');

let __beforeEach = function(callback) {
    callback();
};

describe("template spec", function() {

    it('should pass this canary test', function (done) {
        expect(true).to.equal(true);
        done();
    });

    beforeEach(function(done) {
        __beforeEach(() => {
            done();
        });
    });

});
