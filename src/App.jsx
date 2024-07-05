import './App.css';
import React,  {useState} from 'react';
import Homepage from './components/Homepage.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import SignUpComponent from './components/SignUpComponent.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/login" element={<LoginComponent/>}/>
          <Route exact path="/signup" element={<SignUpComponent/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

    </Router>
  );
}

export default App;
