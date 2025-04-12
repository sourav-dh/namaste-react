import{ createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Action
export const getUser = createAsyncThunk('getUser', async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/users')
	return data.json()
})

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLoading: false,
		data: [],
		isError: false
	},
	extraReducers: builder => {
		builder.addCase(getUser.pending, status => {
			status.isLoading = true
		}),
		builder.addCase(getUser.fulfilled, (status, action) => {
			status.isLoading = false
			status.data = action.payload
		}),
		builder.addCase(getUser.rejected, state => {
			state.isLoading = false
			state.isError = true
		})
	}
})

export default userSlice.reducer
