import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './chart/chartSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { scrapingApi } from '../api/scrapingApi';


export const store = configureStore({
    reducer: {
        chart: chartReducer,
        [scrapingApi.reducerPath]: scrapingApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([scrapingApi.middleware]),

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 


