import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import rootReducer from './rootReducer'

const persistConfig = {
    key:"root",
    storage:AsyncStorage,
    whitelist:['userSlice','todoSlice'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        thunk:{
            extraArgument:{
                dispatch:useAppDispatch
            }
        },
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const persistor = persistStore(store)
export { store }