import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
});

export const ourStore = createStore(rootReducer);
