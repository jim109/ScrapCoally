import { configureStore } from '@reduxjs/toolkit';

import chartReducer from './chart/chartSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        chart: chartReducer,
       
    },

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 


