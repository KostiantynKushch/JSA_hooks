import React, { useReducer } from "react";

const initialValue = {
  count: 0
};
const Counter = () => {
  const handleClick = () => {};

  return (
    <>
      <h1>Counter: 0 </h1>
      <button onClick={handleClick} className="btn btn-primary mr-3">
        Decrement
      </button>
      <button onClick={handleClick} className="btn btn-warning mr-3">
        Reset
      </button>
      <button onClick={handleClick} className="btn btn-success">
        Increment
      </button>
    </>
  );
};

export default Counter;
