const { expect } = require('chai')
const fs = require('fs');
const sinon = require('sinon')

const { textWriter } = require('../services/textWriter')

describe('TextWriter has been called', () => { 

  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  
  it('check if it is a string', () => {
    const response = textWriter('archive.txt', 'working')

    expect(response).to.be.a('string');
  })

  it('it returns "ok" ', () => {
    const response = textWriter('archive.txt', 'working')

    expect(response).to.be.equals('ok');
  })

 })