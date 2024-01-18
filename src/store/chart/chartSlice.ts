import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface chartState {
    data: string[],
    role: string[],
    experience: string[],
    ciudad: string[],
    isReady: boolean,
}

const initialState: chartState = {
    data: [],
    role: [],
    experience: ['1 año', '2 año', '3 año'],
    ciudad: ['Bucaramanga', 'Cali', 'Bogota'],
    isReady: false,
}


const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    initChartState(state, action: PayloadAction<string[]>) {
      if (state.isReady) return;

      state.data = action.payload
      state.isReady = true
    }
  }
});


export const { initChartState } = chartSlice.actions

export default chartSlice.reducer