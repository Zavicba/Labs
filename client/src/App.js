import React from 'react';

import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import Catalogo from "./components/Catalogo/Catalogo"

function App() {
  
  return (
   <div className="container-fluid" id="appcontainer">
    <SearchBar></SearchBar>
    <Catalogo></Catalogo>
   </div>

  )
}

export default App;
