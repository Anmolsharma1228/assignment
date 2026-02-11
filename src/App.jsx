import React from "react";
import TeaLuanching from "./components/TeaLuanching";
import Navbar from "./components/Navbar";
import Dribble from "./components/Dribble";
import Footer from "./components/Footer";
import './index.css'

function App() {

  return (
   <React.Fragment>
    <Navbar />
    <Dribble />
    <Footer/>
   </React.Fragment>
  )
}

export default App
