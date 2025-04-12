import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodo = createAsyncThunk('fetchTodo', async() => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos')
	return await data.json()
})

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		isLoading: false,
		data: [],
		isError: false
	},
	extraReducers: builder => {
		builder.addCase(fetchTodo.pending, (state) => {
			state.isLoading = true
		}),
		builder.addCase(fetchTodo.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action.payload
			state.isError = false
		}),
		builder.addCase(fetchTodo.rejected, state => {
			state.isError = true
			state.isLoading = false
		})
	}
})

export default todoSlice.reducer