import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3';
import React, {useState,useEffect,useRef} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import DashboardApp from './pages/DashboardApp/DashboardApp';
import {useNavigate} from 'react-router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SideBar from './Components/SideBar/SideBar';
import MultilineComponent from './Components/MultiLineChart/MultiLineChart';
import Header from './Components/Header/Header';
import Users from './pages/Users/Users';
import Product from './pages/Product/Product';
import Blog from './pages/Blog/Blog';
import Register from './pages/register/Register';
import Login from './pages/Login/Login';
import NotFound from './pages/404/404';

function App() {
  const Navigate = useNavigate();
  useEffect(() => {
    Navigate('/dashboard/app');
  },[]);
  
  return (
      <div className='App'>
            
      <Grid container spacing={2} className="MainContainer">
        <SideBar />

        <Routes>
        <Route index path="/dashboard/users" element={<Users></Users>} />
          <Route path="/dashboard/app"  element={<DashboardApp ></DashboardApp>} />
          <Route path="/dashboard/product"  element={<Product ></Product>} />
          <Route path="/dashboard/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          </Routes>
        </Grid>
        
        {/* <svg ref={svgRef}/> */}
        </div>
  );
}

export default App;
