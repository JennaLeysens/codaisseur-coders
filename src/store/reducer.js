import { combineReducers } from "redux";
import feedSliceReducer from "../feed/reducer";
import postPageSliceReducer from "../postPage/reducer";
import loginPageReducer from "../auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  auth: loginPageReducer,
});

export default reducer;
