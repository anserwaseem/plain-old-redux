import { createStore, applyMiddleware } from "redux";

const initiaState = {
  count: 0
};
const reducer = (state = initiaState) => state;

const logMiddleware = (store) => (next) => (action) => {
  console.log("sttaes before: ", store.getState(), action);
  next(action);
  console.log("sttaes before: ", store.getState(), action);
};

const monitorMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = end - start;
  console.log(diff);
};

const store = createStore(
  reducer,
  applyMiddleware(logMiddleware, monitorMiddleware)
);

store.dispatch({ type: "any" });
