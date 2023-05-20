import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {Link} from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  return  <div className="topHeader">
          <Link to="/discover">discover</Link>
          <Link to="/users">users</Link>
          <Link to="/task">task</Link>
    </div>
}

export default memo(Header)
