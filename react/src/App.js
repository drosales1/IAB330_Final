import React, { Component, component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/nav';
import Ward from './pages/Ward';
import Staff from './pages/Staff';

function App(){
  let component 
  // Value of component determines what page is populated with
  switch (window.location.pathname){
    case "/":
      component = <Ward />
      break
    case "/ward":
      component = <Ward />
      break
    case "/staff":
      component = <Staff />
      break
  }
  return (
    <>
      <Nav />
      {component}
    </>
    
    
  );
}

export default App;
