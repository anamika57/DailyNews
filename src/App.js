import logo from './logo.svg';
import './App.css';
 import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';


//rfc -> return directly  , rcc-> render function returns
export default class App extends Component {
 
  render() {
    return (
<>
   <Navbar/>
   <News pageSize={5}/>


      </>
    )
  }
}

