import React, { Component } from 'react'

import BtnBotcamp from './components/BtnBotcamp'
import LogoBotcamp from './components/LogoBotcamp'

import './styles/reset.css'

class App extends Component {
  render() {
    return (
      <>
        <LogoBotcamp />
        <BtnBotcamp />
      </>
    )  
  }
}

export default App
