import {Map} from 'immutable';

// Object.assign();

//{},
//
//{
//  count: 0,
//  status: 'RUNNING'
//},
//
//{
//  count: 1;
//  status: 'RUNNING'
//}
//
//
//{
//  count: 2;
//  status: 'RUNNING'
//}
//
//
//{
//  count: 0;
//  status: 'STOPPED'
//}

export default function reducer(state = Map(),
                                action = {type: 'UNKNOWN'}) {
  switch(action.type) {

    case 'START' :
      return Map({
        status: 'RUNNING',
        count: 0
      });

    case 'STOP' :
      return Map({
        status: 'STOPPED',
        count: state.get('count')
      });

    case 'RESUME' :

      return Map({
        status: 'RUNNING',
        count: state.get('count') + 1
      });

    case 'RESTART' :

      return Map({
        status: 'RUNNING',
        count: 0
      });

    case 'TICK' :
      return handleTick(state);

  }
  return state;
}

function handleTick(state) {
  switch(state.get('status')) {

   case 'STOPPED':
     return state;

    case 'RUNNING':
      return Map({
        status: 'RUNNING',
        count: state.get('count') + 1
      });
  }
  return state;
}