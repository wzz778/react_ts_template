import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import counterSlice from './features/counterSlice'
 
// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice,
  },
})

//app的hook，ts类型定义
export type IRootState=ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export default store