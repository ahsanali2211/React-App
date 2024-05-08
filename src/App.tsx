// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ViewAllProducts from "./components/products/ViewAllProducts";
import ViewAllUser from "./components/user/ViewAllUser";

function App() {
  return (
    <>
      <Header /> 
        <Routes>
          <Route path="/" element={<ViewAllProducts />}></Route>
          <Route path="/users" element={<ViewAllUser />}></Route>
        </Routes> 
    </>
  );
}

export default App;
