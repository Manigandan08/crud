import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Edit from './Edit' ;
import App from './App';


  


const Main = () => {
return(
  <BrowserRouter>
<Routes>
  <Route path="/Edit/:user" element={<Edit/>}/>
  <Route path='/' element={<App/>}/>
</Routes>
  </BrowserRouter>
)
}

export default Main;