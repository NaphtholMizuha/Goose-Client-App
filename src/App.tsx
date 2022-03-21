import React from "react";

// 导入路由组件
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'

// 导入页面
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";


function App() {
  return (
    <Router>
    <div className="App">
      {/* 配置路由 */}
      <Routes>
        <Route path = "/home/*" element = {<Home/>}>
          <Route path = "" element = {<MainPage/>} />
        </Route>
        <Route path = "*" element = {<Navigate to ="/home"/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
