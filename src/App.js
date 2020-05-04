import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { Header, Footer } from './pages/common/index';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className="main-container" >
          <Routes />
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
