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
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import CardsPage from './components/Cards/CardsPage';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/adminpanel' element={<Admincourses />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/cards' element={<CardsPage />} />
      </Routes>
      <Footer />
    </Router>  
  );
}

export default App;
