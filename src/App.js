import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainpage/mainpage';
import Header from './components/header/Header';
import SignUpForm from './components/SignUp/Signup';
import LoginForm from './components/LogIn/Login';
import './index.css';
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </Router>  
  );
}

export default App;
