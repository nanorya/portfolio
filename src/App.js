import {createGlobalStyle }  from "styled-components";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/projects.jsx";
import Cv from "./components/cv";
import db from "./firebase";
import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";



function App() {
  const [data, setdata] = useState([])

 
  useEffect(()=>
    onSnapshot(collection(db, "cards"),(snapshot)=>
    setdata(snapshot.docs.map(doc=> doc.data()))
    )

  ,[])
  
  return (
    <>
    <Header/>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects data = {data} />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  text-decoration: none;
  // border-collapse: collapse;

  
}
html{
  overflow-x: hidden;
}
body {
  background-color: #f0efe4;



}
`


