import { createStore, bindActionCreators, combineReducers } from "redux";

const initialState = {
  users: [
    { id: 0, name: "Eric" },
    { id: 1, name: "Johnson" }
  ],
  tasks: [{ title: "Do Research" }, { title: "Do Development" }]
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const doAddUser = (user) => ({ type: ADD_USER, payload: user });
const doAddTask = (title) => ({ type: ADD_TASK, payload: title });

// combined login of reducers
const combinedReducer = (state = initialState, action) => {
  if (action.type === ADD_USER)
    return { ...state, users: [...state.users, action.payload] };
  if (action.type === ADD_TASK)
    return { ...state, tasks: [...state.tasks, action.payload] };
  return state;
};

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) return [...users, action.payload];
  return users;
};
const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) return [...tasks, action.payload];
  return tasks;
};

const reducer = combineReducers({ userReducer, taskReducer });

const store = createStore(reducer);

const actions = bindActionCreators({ doAddUser, doAddTask }, store.dispatch);

actions.doAddUser({ id: 2, name: "Anser" });
actions.doAddTask({ title: "Do Fun" });

console.log(store.getState());
