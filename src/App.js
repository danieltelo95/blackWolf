import React from 'react';
import { useSelector } from 'react-redux';
import MainPage from './pages/mainpage/mainpage';
import Login from './components/LogIn/LogIn';
import Signup from './components/SignUp/SignUp';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const user = useSelector((state) => state.user);

  return (
    <div className="h-full w-full bg-gradient-to-br from-sky-900 to-gray-800">
      <MainPage /> 
    </div>
  );
}

export default App;
