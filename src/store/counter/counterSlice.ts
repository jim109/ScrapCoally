import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

//Definimos el estado inicial del estado
const initialState: CounterState = {
    count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //los reducer son las acciones que queremos llamar para cambiar el valor de los state.
  reducers: {

    addOne( state ) {
      state.count++;
    },
    substratcOne( state ) {
      if (state.count === 0 ) return;

      state.count--;
    },
    //cuando queremos cambiar o recibir un argumento, lo debemos recbir por las action
    resetCount( state, action: PayloadAction<number>) {
      if (action.payload < 0 ) action.payload = 0;

      state.count = action.payload

    }

  }
});

export const { addOne, substratcOne, resetCount } = counterSlice.actions

export default counterSlice.reducer 