import React from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
