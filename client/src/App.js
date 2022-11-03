import React, { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useSelector } from "react-redux";
// import pages
import Home from "./pages/Home";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Student from "./components/Student";
import Notice from "./components/Dashboard/Notices";
import Queries from "./components/Dashboard/Queries";
import BuyAndSell from "./components/Dashboard/BuyAndSell";
import Feed from "./components/Dashboard/Feed";
import WriteABlog from "./components/Dashboard/WriteABlog";
import Blogs from "./components/Dashboard/Blogs";
import SearchStudents from "./components/Dashboard/SearchStudents";
import Pages from "./components/Dashboard/Pages";
import Profile from "./components/Dashboard/Profile/Profile";
import UpdateProfile from "./components/Dashboard/UpdateProfile";

function App() {

  
  const student=useSelector((state)=>state.student)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Student/>}/>
          <Route path='/dashboard/notices' element={<Notice/>}/>
          <Route path='/dashboard/queries' element={<Queries/>}/>
          <Route path='/dashboard/buy-and-sell' element={<BuyAndSell/>}/>
          <Route path='/dashboard/feed' element={<Feed/>}/>
          <Route path='/dashboard/write-a-blog' element={<WriteABlog/>}/>
          <Route path='/dashboard/blogs' element={<Blogs/>}/>
          <Route path='/dashboard/search-students' element={<SearchStudents/>}/>
          <Route path='/dashboard/pages' element={<Pages/>}/>
          {/* Profile */}
          <Route path='/dashboard/profile' element={<Profile student={student}/>}/>
          <Route path='/dashboard/update-profile' element={<UpdateProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
