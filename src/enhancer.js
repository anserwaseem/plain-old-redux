import { createStore, compose } from "redux";

const initiaState = {
  count: 0
};
const reducer = (state = initiaState) => state;

const logEnhancer = (createStore) => (reducer, initialSttae, enhancer) => {
  const loggedReducer = (state, action) => {
    console.log("states before: ", state, action);
    const newState = reducer(state, action);
    console.log("states after: ", newState, action);

    return newState;
  };

  return createStore(loggedReducer, initialSttae, enhancer);
};

const monitorEnhancer = (createStore) => (reducer, initialSttae, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = end - start;
    console.log(diff);

    return newState;
  };

  return createStore(monitoredReducer, initialSttae, enhancer);
};

// single enhancer
// const store = createStore(reducer, logEnhancer);

// multiple enhancers
const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));

store.dispatch({ type: "any" });
