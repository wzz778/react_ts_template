import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      id:1,
      name:'wzz'
    },
    {
      id:2,
      name:'lzj'
    },
    {
      id:3,
      name:'qjl'
    },
  ],
}

// 创建一个Slice
export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    // 定义一个加的方法
    reincrement: state => {
      let thisdata=state.value
      state.value =[...state.value,{id:thisdata.length+1,name:"ysy"}]
    },
    // 定义一个减的方法
  },
})

// 导出加减方法
export const { reincrement } = peopleSlice.actions

// 暴露reducer
export default peopleSlice.reducer