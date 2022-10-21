import React, { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// import pages
import Home from "./pages/Home";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
