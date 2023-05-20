import React,{Suspense} from "react";
import {useRoutes} from 'react-router-dom'
import routes from './router'
import  Header  from "@/components/Header"
function App() {
  return <div className="App">
    <Header></Header>
    <Suspense fallback="Loading...">
      <div className="main">
        {useRoutes(routes)}
      </div>
    </Suspense>
  </div>;
}

export default App;
