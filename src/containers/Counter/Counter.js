import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ActionTypes from '../../store/action';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {
            this.props.results.map((result) => {
              return <li
                key={result.id}
                onClick={() => this.props.onDeleteResult(result.id)}>
                {result.value}
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: ActionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: ActionTypes.DECREMENT}),
    onAddCounter: () => dispatch({type: ActionTypes.ADD, value: 5}),
    onSubtractCounter: () => dispatch({type: ActionTypes.SUBTRACT, value: 5}),
    onStoreResult: (counter) => dispatch({type: ActionTypes.STORE_RESULT, result: counter}),
    onDeleteResult: (id) => dispatch({type: ActionTypes.DELETE_RESULT, id: id}),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
