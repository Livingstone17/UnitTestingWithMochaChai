
// define assertions
const chai = window.chai
const expect = chai.expect
var assert = chai.assert;
var should = chai.should();

describe('getCelcius', ()=>{
    it('should convert fahrenheit to celcius for values enter', () =>{
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    });
    it('should have length of 4', ()=>{
        celciusEquivalence.should.have.lengthOf(4);
    }); 
    it('should be of type array', ()=>{
        assert.typeOf(farenheitValues,'array')
    });
})
