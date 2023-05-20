import React, { memo,Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import  { Outlet,Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return <div>
  <div className="sonTopHeader">
    <Link to="/discover/stroeTemplate">StroeTemplate</Link>
    <Link to="/discover/axiosTemplate">AxiosTemplate</Link>
    <Link to="/discover/album">album</Link>
  </div>
  <div className="sonMain">
    <Suspense fallback="Loading...">
        <Outlet></Outlet>
    </Suspense>
  </div>
</div>
}

export default memo(Discover)
