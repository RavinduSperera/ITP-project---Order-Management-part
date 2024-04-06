import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import the compornents
import CreateOrder from './components/createOrder';
import ViewOrder from './components/viewOrder';

function App() {
  return (
    <div className='App'>
      <CreateOrder/>
      <ViewOrder/>
    </div>
  );
}

export default App;

