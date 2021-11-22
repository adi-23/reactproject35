import loginReducer from "./reducers/loginReducer"
import {createStore} from "redux";

const store = createStore(loginReducer);

export default store;