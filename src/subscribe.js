import { createStore } from "redux";

const initialState = {
  value: 0
};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

// action function
const incrementAction = { type: INCREMENT };

// action creators
const doIncrement = () => ({ type: INCREMENT });
const doAdd = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) return { value: state.value + 1 };
  if (action.type === ADD) return { value: state.value + action.payload };
  return state;
};

const store = createStore(reducer);

const subscriber = () => console.log("SUBSCRIBER", store.getState());
store.subscribe(subscriber);

store.dispatch(doIncrement());
store.dispatch(doAdd(10));
