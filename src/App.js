import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { SearchBar } from './components/layout/SearchBar';
import { Logs } from './components/logs/Logs';
import { AddBtn } from './components/layout/AddBtn';
import { AddLogModal } from './components/logs/AddLogModal';
import { EditLogModal } from './components/logs/EditLogModal';
import { AddTechModal } from './components/techs/AddTechModal';
import { TechListModal } from './components/techs/TechListModal';

function App() {

  useEffect(() => {
    M.AutoInit(); // init Materialize JS
  })

  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </>
  );
}

export default App;
