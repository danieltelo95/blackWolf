import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainpage/mainpage';
import Header from './components/header/Header';
import CoursesMainPage from './components/ShowCourses/CoursesMainPage';
import SignUpForm from './components/SignUp/Signup';
import LoginForm from './components/LogIn/Login';
import './index.css';
import './App.css'
import Admincourses from './components/AdminPanel/Admincourses/Courses';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/adminpanel' element={<Admincourses />} />
      </Routes>
    </Router>  
  );
}

export default App;
