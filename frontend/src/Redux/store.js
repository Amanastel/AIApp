import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as dataReducer } from "./dataReducer/reducer";
import {reducer as courseReducer} from "./courseReducer/reducer";

const rootReducer = combineReducers({
  authReducer,
  dataReducer,
  courseReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
