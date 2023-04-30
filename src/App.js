//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from 'react';

function App() {
  return (
   <>
   <Navbar title="textUtils" aboutText = "About textUtils"/>

   {/* if no props are passed to the Navbar, then default values set would be displayed */}
   {/* <Navbar/> */}
    <div className = "container my-3">  
    <TextForm heading="Enter the text to Analyze."/>
   </div>
   </>
  );
}

export default App;


