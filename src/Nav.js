import React from 'react'
import { Route,Link,Routes } from 'react-router-dom'
import App from './App'
import Main from './Main'
import ProductInfo from './ProductInfo'
import im from "./Frame.svg"
import "./NavStyle.css"
const Nav = () => {
  return (
    <>
      <nav>
        <img src={im} width="180px"id="nav_img"/>
        <div>
        <Link to='/Main' className="custom-link">main </Link>
        <Link to='/ProductInfo' className="custom-link">ProductInfo</Link>
        </div>
        </nav>
    <Routes>
      <Route path='/Main' Component={Main}></Route>
      <Route path='/ProductInfo' Component={ProductInfo}></Route>
    </Routes>
    </>
  )
}

export default Nav
