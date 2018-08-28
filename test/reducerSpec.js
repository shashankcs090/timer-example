import {Map} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe("Reducer", () => {
  it("on receiving START, initializes the state", () => {
    const initialState = Map();
    const action = {
      type: 'START'
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({
      status: 'RUNNING',
      count: 0
    }));
  });

  it("on receiving STOP, the status is changed to STOPPED", () => {
    const initialState = Map({
      status: 'RUNNING',
      count: 10
    });
    const action = {
      type: 'STOP'
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({
      status: 'STOPPED',
      count: 10
    }));
  });

  it("on receiving RESUME, the status is changed to RUNNING", () => {
    const initialState = Map({
      status: 'STOPPED',
      count: 10
    });
    const action = {
      type: 'RESUME'
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({
      status: 'RUNNING',
      count: 11
    }));
  });

  it("on receiving RESTART, the count is reset to 0", () => {
    const initialState = Map({
      status: 'STOPPED',
      count: 10
    });
    const action = {
      type: 'RESTART'
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({
      status: 'RUNNING',
      count: 0
    }));
  });

  it("on receiving TICK and status == RUNNING, count increments", () => {
    const initialState = Map({
      status: 'RUNNING',
      count: 10
    });
    const action = {
      type: 'TICK'
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({
      status: 'RUNNING',
      count: 11
    }));
  });


  it("on receiving TICK, when status is STOPPED, don't change count ", () => {
    const initialState = Map({
      status: 'STOPPED',
      count: 10
    });

    const action = {
      type: 'TICK'
    };

    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(Map({
      status: 'STOPPED',
      count: 10
    }));
  });
});