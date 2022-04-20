import React from "react";
import './App.css';
import {SideBar} from './component/SideBar/index';
import Content from './component/Content/index';
const App = ()=>{
  return(
    <div className="app">
        <SideBar/>
        <Content />
    </div>
  );
}


export default App;