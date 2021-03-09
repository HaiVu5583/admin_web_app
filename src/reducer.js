import authReducer from "src/redux/auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
