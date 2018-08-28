import React from 'react'

export default class TimerWithState extends React.Component {

  // props

  // state

 //


  constructor(props){
    super(props);
    this.state={
      count: props.startCount
    };
  }
  start() {
    clearInterval(this.intervalId);
    this.setState({
      count: 0
    });
    this.intervalId = setInterval(() => this.setState({count: this.state.count + 1}), 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
    this.setState({
      count: 0
    });
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillMount(){
    console.log('componentWillMount');
  }

  componentWillRecieveProps(nextProps, prevProps){
    console.log('componentWillRecieveProps');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    const {count} = this.state;
    // this.props;
    // this.state
    return (
      <div>
        <h1>{count}</h1>
        <div>
          <button disabled={this.intervalId} onClick={() => this.start()}>START</button>
          <button disabled={!this.intervalId} onClick={() => this.stop()}>STOP</button>
        </div>
      </div>
    );
  }
}