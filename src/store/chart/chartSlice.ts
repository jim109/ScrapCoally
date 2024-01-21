import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface chartState {
  role: string[],
  experience: string[],
  ciudad: string[],
  menuMobile: boolean,
}

const initialState: chartState = {
  role: ['Junior', 'SemiSenior', 'Senior'],
  experience: ['1 año', '2 año', '3 año'],
  ciudad: ['Bucaramanga', 'Cali', 'Bogota'],
  menuMobile: false,
}

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    menuMobile: (state) => {
      state.menuMobile =  !state.menuMobile
    }
  }
});


export const { menuMobile } = chartSlice.actions

export default chartSlice.reducer