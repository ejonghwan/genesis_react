
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchYoutube = createAsyncThunk('youtube/requestYoutube', async () => {
	const key = 'AIzaSyChzicx_fRjO6YQhLL-C8tDxCq0E46sxtk';
	const list = 'PLQytOX-GQNjpnWvXUwth7PTdoEA2kZX16';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;
	const response = await axios.get(url);
	return response.data.items;
});

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeSlice.reducer;