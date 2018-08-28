let intervalId;

export function start() {
  return {
    type: 'START'
  };
}

export function tick() {
  return {
    type: 'TICK'
  };
}

export function startClock() {
  return (dispatch, getState) => {
    dispatch(start());
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      dispatch(tick());
    }, 1000);
  };
}

export function stopClock() {
  return (dispatch) => {
    dispatch(stop());
    clearInterval(intervalId);
  };
}

export function stop() {
  return {
    type: 'STOP'
  };
}
