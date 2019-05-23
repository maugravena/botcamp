import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import HeaderBotcamp from '../../components/HeaderBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutBotcamp from '../../components/LogoutBotcamp'
import InputMessage from '../../components/InputMessage'
import ChatWrapper from '../../components/ChatWrapper'
import MessagesWrapper from '../../components/MessagesWrapper'

class Chat extends Component {
  state = {
    messages: [
      // {
      //   id: Date.now(),
      //   content: '!cpf',
      // },
    ]
  }

  handleKeyUp(event) {
    const newElement = {
      id: Date.now(),
      content: event.target.value
    }

    if (event.keyCode === 13 && event.target.value !== '') {
      this.setState({
        messages: [...this.state.messages, newElement]
      })

      event.target.value = ''
    }
  }
  
  render() {
    return (
      <ChatWrapper>
        <HeaderBotcamp>
          <LogoBotcamp smaller/>
          <Link to='/'>
            <LogoutBotcamp />
          </Link>
        </HeaderBotcamp>
        <MessagesWrapper messages={this.state.messages}/>
        <InputMessage onKeyUp={this.handleKeyUp.bind(this)}/>
      </ChatWrapper>
    )
  }
}

export default Chat
