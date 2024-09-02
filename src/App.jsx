import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </StrictMode>
)

export default App;