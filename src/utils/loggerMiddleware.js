// // middleware/loggerMiddleware.js

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log('Dispatching action:', action);
//   console.log('State before:', store.getState());

//   // Call the next middleware in the chain (or the reducer if it's the last one)
//   const result = next(action);

//   console.log('State after:', store.getState());
//   return result; // It's important to return the result of next(action)
// };

// export default loggerMiddleware;

const loggerMiddleware = store => next => action => {
	console.log("Action : ", action)
	console.log("Previous state : ", store.getState())
	const result = next(action)
	console.log("Next State : ", store.getState())
	return result
}

export default loggerMiddleware