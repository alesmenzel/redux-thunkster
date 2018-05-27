const { expect } = require('chai');
const sinon = require('sinon');
const thunkster = require('./thunkster');

const noop = () => {};

describe('thunkster', () => {
  beforeEach(() => {
    thunkster.listeners = [];
  });

  it('should add listener on subscribe', () => {
    const handler = () => {};

    expect(thunkster.listeners).to.be.deep.equal([]);
    thunkster.subscribe(handler);
    expect(thunkster.listeners).to.be.deep.equal([handler]);
  });

  it('should return unsubscribe function on subscribing', () => {
    const handler = () => {};

    const unsubscribe = thunkster.subscribe(handler);
    expect(unsubscribe).to.be.a('function');
  });

  it('should remove listener on unsubscribing', () => {
    const handler = () => {};

    const unsubscribe = thunkster.subscribe(handler);
    unsubscribe();
    expect(thunkster.listeners).to.be.deep.equal([]);
  });

  it('should call all listeners on any action', () => {
    const handler = sinon.fake();
    const handler2 = sinon.fake();

    thunkster.subscribe(handler);
    thunkster.subscribe(handler2);

    const state = {};
    const action = {
      type: 'ACTION',
    };

    thunkster(state)(noop)(action);

    expect(handler.callCount).to.be.equal(1);
    expect(handler2.callCount).to.be.equal(1);
  });

  it('should pass through the action', () => {
    const next = sinon.spy();

    const state = {};
    const action = {
      type: 'ACTION',
    };

    thunkster(state)(next)(action);

    expect(next.callCount).to.be.equal(1);
    expect(next.calledWith(action)).to.be.ok;
  });
});
