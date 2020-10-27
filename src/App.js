import React from 'react';
import './App.css';
import SearchBar from "./SearchBar/SearchBar.js"
import Catalogo from "./Catalogo/Catalogo.js"

function App() {
  return (
   <div class="container-fluid">
    <SearchBar></SearchBar>
    <Catalogo></Catalogo>
   </div>

  )
}

export default App;
