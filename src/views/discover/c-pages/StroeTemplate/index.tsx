import React, { memo ,useRef} from 'react'
import { increment, decrement } from '@/store/features/counterSlice'
import type { FC, ReactNode } from 'react'
// import { IRootState } from '@/store'
import { useAppSelector ,useAppDispatch} from '@/store'
interface IProps {
  children?: ReactNode
}

const StroeTemplate: FC<IProps> = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const InputRef= useRef<HTMLInputElement>(null);
  // const InputRef2= createRef();
  return (
    <div>
      <h1>我是axios请求的数据：</h1>
      <div style={{ width: 100, margin: '10px' }}>
        <input style={{ width:"100px",height:"30px"}} ref = { InputRef } type="number"/>
        <button style={{padding:"10px",margin:"0 10px"}} onClick={() => dispatch(increment(InputRef.current?.value))}>+</button>
        <button style={{padding:"10px"}} onClick={() => dispatch(decrement())}>-1</button><br />
        <span>{count}</span>
      </div>
    </div> 
  )
}

export default memo(StroeTemplate)
