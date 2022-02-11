import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch(baseUrl + 'promotions');
            return response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState: { isLoading: true, errMess: null, promotionsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchPromotions.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.promotionsArray = action.payload;
        },
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.payload;
        }
    }
});

export const promotionsReducer = promotionsSlice.reducer;
