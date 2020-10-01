import React, { useReducer } from "react";

const reducer = (state, action) => {
	const { count } = state;

	switch (action.type) {
		case "increment":
			return { ...state, count: count + 1 }
		case "decrement":
			return { ...state, count: count - 1 }
		case "reset":
			return { ...state, count: 0 }
		default:
			throw Error('no cases');
	}
}


const initialValue = {
	count: 0
};

const Counter = () => {
	const [{ count }, dispatch] = useReducer(reducer, initialValue);

	const handleClick = (action) => {
		dispatch({ type: action });
	};

	return (
		<>
			<h1>Counter: {count} </h1>
			<button onClick={() => handleClick('decrement')} className="btn btn-primary mr-3">
				Decrement
      </button>
			<button onClick={() => handleClick('reset')} className="btn btn-warning mr-3">
				Reset
      </button>
			<button onClick={() => handleClick('increment')} className="btn btn-success">
				Increment
      </button>
		</>
	);
};

export default Counter;
