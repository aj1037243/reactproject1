import React from "react";
import MainFrame from "./MainFrame";
import {BrowserRouter} from 'react-router-dom'


function Main() {
  return (

    <BrowserRouter>
   
        <MainFrame/>
    </BrowserRouter>
    
  )
}

export default Main