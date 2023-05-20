import React, { memo,useEffect,useState} from 'react'
import type { FC, ReactNode } from 'react'
import {getTopBanner} from '@/service/modules/recommend'
import "./style.less"
interface IProps {
  children?: ReactNode
}
interface listRoot {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const AxiosTemplate: FC<IProps> = () => {
  const [list , setList]=useState<listRoot[]>([])
  useEffect(() =>{
    (async function() {
      const res= await getTopBanner()
      setList(res.banners)
    })()
  },[])
  return <div>
    <h1>我是axios请求的数据：</h1>
    <ul>
      {
        list.map((item)=>{
          return (
            <li key={item.encodeId}>{item.imageUrl}</li>
          )
        })
      }
    </ul>
  </div>
}

export default memo(AxiosTemplate)
