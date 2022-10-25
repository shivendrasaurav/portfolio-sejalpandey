import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import 'fdweb/fluent-core.css';
import 'fdweb/fluent-icons.css';
import './App.css';

import Index from "./routes/index.jsx";

const App = () => {
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;