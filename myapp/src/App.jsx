import './App.css';
import Navbar from './components/navbar.jsx';
import Header from './components/header.jsx';
import React from 'react';
import {UserForm, Todo} from './components/usingUseState.jsx';
import Home from './pages/home.jsx';
import FetchDataUseEffect from './components/FetchDataUseEffect.jsx';

function App() {
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

export default App;
