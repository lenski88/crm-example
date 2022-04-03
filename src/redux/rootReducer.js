import { combineReducers } from "redux";
import { navigationReducer } from "./reducers/navigationReaducer";
import { currentDeveloperReducer } from "./reducers/currentDeveloperReducer";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  currentDeveloper: currentDeveloperReducer
});
