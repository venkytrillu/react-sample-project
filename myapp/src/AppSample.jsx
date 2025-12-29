import './AppSample.css';
import Navbar from './Components/navbar.jsx';
import Header from './Components/header.jsx';
import React from 'react';
import {UserForm, Todo} from './Components/usingUseState.jsx';
import Home from './pages/home.jsx';
import FetchDataUseEffect from './Components/FetchDataUseEffect.jsx';

function AppSample() {
  return (
    <div>
    {/* <Navbar />
     <Header /> 
      <UserForm />
      <Todo /> */}
      <Home />
      <FetchDataUseEffect />
    </div>
  );
}

export default AppSample;
