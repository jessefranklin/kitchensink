import React from 'react';

function Counter({ count, increment, decrement, reset }) {
    return (
      <div>
        <React.Suspense fallback={"loading"}>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button onClick={reset}>reset</button>
        </React.Suspense>
      </div>
    )
}

const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}