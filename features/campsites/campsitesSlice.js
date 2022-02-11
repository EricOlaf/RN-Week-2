import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch(baseUrl + 'campsites');
            return response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState: { isLoading: true, errMess: null, campsitesArray: [] },
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.campsitesArray = action.payload;
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.payload;
        }
    }
});

export const campsitesReducer = campsitesSlice.reducer;
