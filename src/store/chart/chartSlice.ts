import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface chartState {
  role: string[],
  experience: string[],
  ciudad: string[],
}

const initialState: chartState = {
  role: ['Junior', 'SemiSenior', 'Senior'],
  experience: ['1 año', '2 año', '3 año'],
  ciudad: ['Bucaramanga', 'Cali', 'Bogota'],
}

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {

  }
});


export const {  } = chartSlice.actions

export default chartSlice.reducer