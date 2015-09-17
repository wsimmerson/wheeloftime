var expect = require('chai').expect;
    wot = require('../index');


describe("Wheel of Time Specs", function(){

    it('should have data with a names array', function(done) {
        expect(wot).to.have.property('names');
        done();
    });

    it('should have a get method that returns a string', function(done) {
        expect(wot).to.have.property('get');
        expect(typeof(wot.get())).to.eql('string');
        done();
    });

    it('should have a getList method that returns an array of names', function(done) {
        expect(wot).to.have.property('getList');
        expect(wot.getList(2)).to.be.instanceof(Array);
        expect(wot.getList(4)).to.have.length(4);
        done();
    });

});
