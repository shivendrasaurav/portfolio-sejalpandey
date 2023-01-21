import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import 'fdweb/fluent-core.css';
import 'fdweb/fluent-icons.css';
import './App.css';
import './Colors.css';

import Portfolio from "./routes/home/index.jsx";
import Resume from "./routes/resume/index.jsx";

const App = () => {
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;