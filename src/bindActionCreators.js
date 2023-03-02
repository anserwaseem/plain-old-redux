import { createStore, bindActionCreators } from "redux";

const initialState = {
  value: 0
};

const INCREMENT = "INCREMENT";
const ADD = "ADD";

const incrementAction = { type: INCREMENT };

const doIncrement = () => ({ type: INCREMENT });
const doAdd = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) return { value: state.value + 1 };
  if (action.type === ADD) return { value: state.value + action.payload };
  return state;
};

const store = createStore(reducer);

const actions = bindActionCreators({ doIncrement, doAdd }, store.dispatch);

actions.doAdd(1000);
actions.doIncrement();

console.log(store.getState());
