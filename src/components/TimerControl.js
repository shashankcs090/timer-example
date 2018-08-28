import React from 'react';

export default class TimerControl extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.startClock()}>START</button>
        <button onClick={() => this.props.stopClock()}>STOP</button>
      </div>
    );
  }
}