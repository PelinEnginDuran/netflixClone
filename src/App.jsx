
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import Header from "./Components/Header";



const App = () =>{

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detay/:id" element={<DetailPage />} />

      
    </Routes>
    
    </BrowserRouter>


  )
}

export default App