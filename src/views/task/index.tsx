import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Task: FC<IProps> = () => {
  return <div>我是Task</div>
}

export default memo(Task)
