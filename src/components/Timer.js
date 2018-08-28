import React from 'react';
import {connect} from 'react-redux';
import TimerControl from './TimerControl';
import TimerConsole from './TimerConsole';
import * as actionCreators from '../action_creators';

export class Timer extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <TimerConsole count={this.props.count}/>
        <TimerControl {...this.props}/>
      </div>
    );
  }
}


// {count: 0, status:''}

function mapStateToProps(state) {
  return {
    count: state.get('count'),
  }
}

export const TimerContainer = connect(
  mapStateToProps,
  actionCreators
)(Timer);
