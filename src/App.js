import React, {useRef} from "react";
import './App.css';
import SideBar from './component/SideBar';
import Content from './component/Content'
const App = ()=>{



  return(
    <div className="app">
        <SideBar/>
        <Content />
    </div>
  );
}


export default App;