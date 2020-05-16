import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as Actions from '../../store/actions/action';

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
    onIncrementCounter: () => dispatch(Actions.increment()),
    onDecrementCounter: () => dispatch(Actions.decrement()),
    onAddCounter: () => dispatch(Actions.add()),
    onSubtractCounter: () => dispatch(Actions.subtract()),
    onStoreResult: (counter) => dispatch(Actions.storeResult(counter)),
    onDeleteResult: (id) => dispatch(Actions.deleteResult(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
