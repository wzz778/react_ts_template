## 1.项目的初始化配置
### （1）创建react+ts项目
> create-react-app react_ts_music --template typescript

生成目录：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683942748806-8170792b-3f61-475c-b562-bf6436b915cd.png#averageHue=%23294b5f&clientId=u8f907e69-2035-4&from=paste&height=473&id=uc20153a8&originHeight=709&originWidth=310&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=51601&status=done&style=none&taskId=ucecff915-b7d6-4730-baf9-72f5def5010&title=&width=206.66666666666666)
修改运行package.json中的配置
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683943088796-f12b2a7b-fc0d-4e4c-b8d0-aaf01fbdb16a.png#averageHue=%23222020&clientId=u8f907e69-2035-4&from=paste&height=165&id=uacc81820&originHeight=247&originWidth=601&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=24564&status=done&style=none&taskId=u7b8d3f63-f7e7-4a2e-93a1-f4c568a50ff&title=&width=400.6666666666667)
改成：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683943118027-25d91f6c-b8db-487b-83d5-121880535ee1.png#averageHue=%23252221&clientId=u8f907e69-2035-4&from=paste&height=120&id=u308cc09a&originHeight=180&originWidth=449&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=17286&status=done&style=none&taskId=uea4852e5-d43b-4027-a79a-54d9dde8d09&title=&width=299.3333333333333)
### （2）项目基本配置
#### 1.craco配置webpack
> npm install @craco/craco@alpha -D

创建craco.config.json文件：
```javascript
const path = require('path')


const resolve = (dir) => path.resolve(__dirname, dir)


module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    }
  }
}
```
#### 2.配置@指定的src文件下的内容
在tsconfig.json文件中加：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683942906558-67fd03cc-049b-434c-adc7-bd5736e8fe0a.png#averageHue=%23201f1f&clientId=u8f907e69-2035-4&from=paste&height=123&id=u87b36e47&originHeight=185&originWidth=280&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=6845&status=done&style=none&taskId=u04138cdc-ca83-4b09-9ef3-17c385d3453&title=&width=186.66666666666666)
#### 3.代码规范配置
##### 创建.editorconfig文件配置
```
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行


[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```
 
##### 配置prettier工具
可让代码更加好看，风格一致
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683944833094-5955b1e9-214c-45c9-b0ea-5be0119a2d85.png#averageHue=%23faf9f8&clientId=u8f907e69-2035-4&from=paste&height=193&id=u17a36263&originHeight=289&originWidth=1118&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=197175&status=done&style=none&taskId=u0423e480-bb16-4626-bb8a-686a42ca196&title=&width=745.3333333333334)
> npm install prettier -D

创建_prettierrc文件
```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "none",
  "semi": false
}
```
改运行文件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683945419205-54184954-e6e9-4260-8054-72dac2f81bd4.png#averageHue=%23232120&clientId=u8f907e69-2035-4&from=paste&height=202&id=u711e59d3&originHeight=303&originWidth=644&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=32050&status=done&style=none&taskId=u281520a2-b024-48bd-bc52-3f2defc82e0&title=&width=429.3333333333333)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683945468495-6a91c3c9-a099-4994-92c9-5f373c740527.png#averageHue=%23909059&clientId=u8f907e69-2035-4&from=paste&height=423&id=u5de30474&originHeight=634&originWidth=730&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=76379&status=done&style=none&taskId=u5dec6cc6-48a6-4771-84c6-d75dc4a08f1&title=&width=486.6666666666667)
```
# /build/*
# .local
# .output.js
# /node_modules/**


# **/*.svg
# **/*.sh


# /public/*
```
##### 配置ESlint工具
> npm install eslint -D

初始化：
> npx eslint --init

![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683946269326-fcf2f6c4-e2a6-4708-a65a-8c7267c41bf7.png#averageHue=%232b2a28&clientId=u8f907e69-2035-4&from=paste&height=241&id=u43c0210f&originHeight=362&originWidth=1111&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=74476&status=done&style=none&taskId=u2b16a564-03a5-4a70-a5a5-e75425c7114&title=&width=740.6666666666666)
```javascript
module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    }
  }
  
```
## 2.项目内容配置
### （1）目录的划分
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1683947539211-f7dc37a0-61d4-4d61-b73d-3760063cf554.png#averageHue=%2323272b&clientId=u8f907e69-2035-4&from=paste&height=333&id=QQKlB&originHeight=500&originWidth=426&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=25472&status=done&style=none&taskId=ubf6c1062-c34e-4edd-8ca2-0a0c7599b7e&title=&width=284)
### （2）配置less
> npm install craco-less@2.1.0-alpha.0

craco.config.js文件：
```javascript
const path = require("path");
const CracoLessPlugin = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir);


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
```
### （3）路由的配置
> npm install react-router-dom

  router文件夹建立index.tsx
```tsx
import React,{lazy} from "react";
import {Navigate} from 'react-router-dom'
import {RouteObject} from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))


const routes: RouteObject[]=[
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [

    ]
  },
]


export default routes
```
```tsx
import React,{Suspense} from "react";
import {useRoutes,Link} from 'react-router-dom'
import routes from './router'
function App() {
  return <div className="App">
    <div className="topHeader">
      <Link to="/discover">discover</Link>
      <Link to="/users">users</Link>
      <Link to="/task">task</Link>
    </div>
    <Suspense fallback="Loading...">
      <div className="main">
        {useRoutes(routes)}
      </div>
    </Suspense>
  </div>;
}

export default App;

```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import App from "@/App";
import "@/assets/css/base.less"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<BrowserRouter><App /></BrowserRouter>);

```
### （4）redux的配置
安装react-redux：react-redux和@reduxjs/toolkit。
> npm install react-redux @reduxjs/toolkit -S

安装完相关包以后开始编写基本的 **RTK** 程序

- 创建一个store文件夹
- 创建一个index.ts做为主入口
- 创建一个festures文件夹用来装所有的store
- 创建一个counterSlice.js文件，并导出简单的加减方法
#### 创建 Redux State Slice
创建 slice 需要一个字符串名称来标识切片、一个初始 state 以及一个或多个定义了该如何更新 state 的 reducer 函数。slice 创建后 ，我们可以导出 slice 中生成的 Redux action creators 和 reducer 函数。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1684246872996-e6669ecd-83e2-4cf2-896d-1509a0372641.png#averageHue=%2321262c&clientId=ucf9b63bb-ffbd-4&from=paste&id=u1ff3d290&originHeight=351&originWidth=259&originalType=url&ratio=1.5&rotation=0&showTitle=false&size=72247&status=done&style=none&taskId=u0222a112-bf87-453f-b4f9-3db370702f8&title=)
store/features/counterSlice.js
```tsx
import { createSlice } from '@reduxjs/toolkit'

// 创建一个Slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value: 0,
  },
  reducers: {
    // 定义一个加的方法
    increment:(state,{payload})  => { 
      state.value += parseInt(payload)
    },
    // 定义一个减的方法
    decrement: state => {
      state.value -= 1
    },
  },
})

// 导出加减方法
export const { increment, decrement } = counterSlice.actions

// 暴露reducer
export default counterSlice.reducer
```
createSlice是一个全自动的创建reducer切片的方法，在它的内部调用就是createAction和createReducer，之所以先介绍那两个也是这个原因。createSlice需要一个对象作为参数，对象中通过不同的属性来指定reducer的配置信息。
createSlice(configuration object)
配置对象中的属性：

- name —— reducer的名字，会作为action中type属性的前缀，不要重复
- initialState —— state的初始值
- reducers —— reducer的具体方法，需要一个对象作为参数，可以以方法的形式添加reducer，RTK会自动生成action对象。

总的来说，使用createSlice创建切片后，切片会自动根据配置对象生成action和reducer，action需要导出给调用处，调用处可以使用action作为dispatch的参数触发state的修改。reducer需要传递给configureStore以使其在仓库中生效。
我们可以看看counterSlice和counterSlice.actions是什么样子
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1684246874082-b36fbe85-d5dd-4716-b8ad-e5a1d1c87e71.png#averageHue=%23202226&clientId=ucf9b63bb-ffbd-4&from=paste&id=uc8eadec9&originHeight=570&originWidth=1754&originalType=url&ratio=1.5&rotation=0&showTitle=false&size=324339&status=done&style=none&taskId=uf1eff857-786e-428f-99d7-6d077ab6f92&title=)
#### 将 Slice Reducers 添加到 Store 中
下一步，我们需要从计数切片中引入 reducer 函数，并将它添加到我们的 store 中。通过在 reducer 参数中定义一个字段，我们告诉 store 使用这个 slice reducer 函数来处理对该状态的所有更新。
我们以前直接用redux是这样的
```tsx
const reducer = combineReducers({
  counter:counterReducers
});

const store = createStore(reducer);
```
store/index.js
切片的reducer属性是切片根据我们传递的方法自动创建生成的reducer，需要将其作为reducer传递进configureStore的配置对象中以使其生效：
```tsx
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
```

- configureStore需要一个对象作为参数，在这个对象中可以通过不同的属性来对store进行设置，比如：reducer属性用来设置store中关联到的reducer，preloadedState用来指定state的初始值等，还有一些值我们会放到后边讲解。
- reducer属性可以直接传递一个reducer，也可以传递一个对象作为值。如果只传递一个reducer，则意味着store中只有一个reducer。若传递一个对象作为参数，对象的每个属性都可以执行一个reducer，在方法内部它会自动对这些reducer进行合并。
#### store加到全局
main.js
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// redux toolkit
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```
#### 在 React 组件中使用 Redux 状态和操作
现在我们可以使用 React-Redux 钩子让 React 组件与 Redux store 交互。我们可以使用 useSelector 从 store 中读取数据，使用 useDispatch dispatch actions。
App.jsx
```tsx
import React, { memo ,useRef,createRef} from 'react'
import { increment, decrement } from '@/store/features/counterSlice'
import type { FC, ReactNode } from 'react'
// import { IRootState } from '@/store'
import { useAppSelector ,useAppDispatch} from '@/store'
interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const InputRef= useRef<HTMLInputElement>(null);
  const InputRef2= createRef();
  return (
    <div>
      <h1>count</h1>
      <div style={{ width: 100, margin: '10px' }}>
        <input ref = { InputRef } type="text"/>
        <button onClick={() => dispatch(increment(InputRef.current?.value))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <span>{count}</span>
      </div>
    </div> 
  )
}

export default memo(Artist)

```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26685644/1684420493184-b190f5b2-8039-4a8f-8698-b69623cbe30b.png#averageHue=%23eff7fe&clientId=u5d04aeeb-adbf-4&from=paste&height=163&id=u7cbaeb42&originHeight=244&originWidth=676&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=3008&status=done&style=none&taskId=u8fb11711-ca72-4b09-992b-ef98ef01bd6&title=&width=450.6666666666667)
现在，每当你点击”递增“和“递减”按钮。

- 会 dispatch 对应的 Redux action 到 store
- 在计数器切片对应的 reducer 中将看到 action 并更新其状态
- <App>组件将从 store 中看到新的状态，并使用新数据重新渲染组件
### （5）axios配置
在service文件下：创建requset文件夹：
#### service/requset:
配置接口的路径：
```tsx
const BASE_URL = 'http://codercba.com:9002/'
const TIME_OUT = 10000

console.log(process.env.REACT_APP_NAME)
console.log(process.env.REACT_APP_AGE)

export { BASE_URL, TIME_OUT }

```
拦截器类型：
```tsx
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}

```
请求类的封装：
```typescript
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'


const DEAFULT_LOADING = true


class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean


  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)


    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors


    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      // this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )


    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )


    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }


  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }


      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }


      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING


          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }


  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }


  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }


  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }


  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}


export default HYRequest
```
#### service/modules对要用的接口进行封装：
```typescript
import hyRequest from '..'


export function getTopBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}


export function getHotRecommend() {
  return hyRequest.get({
    url: '/personalized'
  })
}


export function getNewAlbum(offset = 0, limit = 10) {
  return hyRequest.get({
    url: '/album/new',
    params: {
      offset,
      limit
    }
  })
}


export function getPlayListDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
```
#### service/index
请求函数的封装
```typescript
// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'


const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})


export default hyRequest
```
#### 路由的请求：
```tsx
import hyRequest from '@/service';
import React, { memo,useEffect,useState} from 'react'
import type { FC, ReactNode } from 'react'
import {getTopBanner} from '@/service/modules/recommend'
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

```
 
