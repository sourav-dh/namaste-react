import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice'
import todoSliceReducer from './todoSlice'
import userSliceReducer from './userSlice';
import loggerMiddleware from "./loggerMiddleware";

const appStore = configureStore({
	reducer: {
		cart: cartReducer,
		todo: todoSliceReducer,
		user: userSliceReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})

export default appStore