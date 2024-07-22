import React from 'react';
import MainPage from './pages/mainpage/mainpage';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-sky-900 to-gray-800">
      <MainPage />
    </div>
  );
}

export default App;
