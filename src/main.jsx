import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Articles from './Articles.jsx';
import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import './style/index.css'
// i fucking js so fucking much
// const NavItem = (prop) => {
//   function getSubPage() {
//     let URL = window.location.href;
//     let res;
//     res=URL.split('/')[3];
//     res=(res===''||res==='#')?'/':res;
//     return res;
//   }
//   useEffect(()=>{
//     document.getElementById(prop.id).className=(getSubPage()==prop.to)?'nl_active':'nl_dstate';
//   })
//   return(
//     <a href={prop.to} id={prop.id}>{prop.children}</a>
//   )
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <nav>
      <div className='cwrap'>
        <a id="logo_a" href='/'><div id="nav_logo"/></a>
        <a href="/articles">Articles</a>
      </div>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/articles" element={<Articles/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)