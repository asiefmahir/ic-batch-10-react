// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import { cartReducer } from "./reducers/cart";
// import { shopReducer } from "./reducers/shop";
// import { composeWithDevTools } from "@redux-devtools/extension";
// // import { ourMiddleWare } from "./middlewares";
// import { postReducer } from "./reducers/post";
// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// 	shop: shopReducer,
// 	post: postReducer,
// });

// export const ourStore = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk)),
// );

import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { cartSlice } from "./reducers/cart";
import { postSlice } from "./reducers/post";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { rootApi } from "../services";

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartSlice.reducer,
	post: postSlice.reducer,
	[rootApi.reducerPath]: rootApi.reducer,
};

// rootApi.middleware

export const ourStore = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM().concat(rootApi.middleware),
});

setupListeners(ourStore.dispatch);
