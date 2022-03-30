const { expect } = require('chai');
const { checkNumber } = require('../services/checkNumber');


describe('check the function checkNum', () => {
  it('check if checkNumber returns a string', () => {
    const response = checkNumber(0)
    expect(response).to.be.a('string');
  })

  it('check if checkNumber returns a error string', () => {
    const response = checkNumber('asd1asd')
    expect(response).to.be.equal('it must be a number');
  })

  it('check if the number is positive', () => {
    const response = checkNumber(1);
    // expect.fail('TBI');
    expect(response).to.be.equal('Positive');
  });

  it('check if the number is negative', () => {
    const response = checkNumber(-1);
    // expect.fail('TBI');
    expect(response).to.be.equal('Negative');
  });

  it('check if the number is neutral', () => {
    const response = checkNumber(0);
    // expect.fail('TBI');
    expect(response).to.be.equal('Neutral');
  });
 });