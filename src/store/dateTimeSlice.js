import { createSlice } from '@reduxjs/toolkit';

const dateTimeSlice = createSlice({
  name: 'dateTime',
  initialState: {
    currentDate: new Date(),
  },
  reducers: {
    updateDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const { updateDate } = dateTimeSlice.actions;
export const selectCurrentDate = (state) => state.dateTime.currentDate;

export default dateTimeSlice.reducer;