import {createGlobalStyle }  from "styled-components";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/projects.jsx";

function App() {
  return (
    <>
    <Header/>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  text-decoration: none
}
body {
  background-color: #f0efe4;
}
`


