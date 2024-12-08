import logo from './logo.svg';
import './App.css';
 import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';


//rfc -> return directly  , rcc-> render function returns
export default class App extends Component {
   c='john'
  render() {
    return (
<>
   <Navbar/>
   <News/>

      <div>
        Hello my First Class Based  Component {this.c}
      </div>
      </>
    )
  }
}

