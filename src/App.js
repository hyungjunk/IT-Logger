import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { SearchBar } from './components/layout/SearchBar';
import { LogItem } from './components/logs/LogItem';

function App() {

  useEffect(() => {
    M.AutoInit(); // init Materialize JS
  })

  return (
    <>
      <SearchBar />
      <div className="container">
      <LogItem />
      </div>
    </>
  );
}

export default App;
