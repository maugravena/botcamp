import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderBotcamp from '../../components/HeaderBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutBotcamp from '../../components/LogoutBotcamp'
import InputMessage from '../../components/InputMessage'
import ChatWrapper from '../../components/ChatWrapper'
import MessagesWrapper from '../../components/MessagesWrapper'

function Chat() {
  const [listMessages, setListMessages] = useState([])
  const [message, setMessage] = useState({})

  function handleKeyUp(event) {
    setMessage({
      id: Date.now(),
      content: event.target.value
    })

    if (event.keyCode === 13 && event.target.value !== '') {
      setListMessages([...listMessages, message])

      event.target.value = ''
    }
  }

  return (
    <ChatWrapper>
      <HeaderBotcamp>
        <LogoBotcamp smaller/>
        <Link to='/'>
          <LogoutBotcamp />
        </Link>
      </HeaderBotcamp>
      <MessagesWrapper messages={listMessages}/>
      <InputMessage onKeyUp={handleKeyUp}/>
    </ChatWrapper>
  )
}

// class Chat extends Component {
//   constructor(props) {
//     super(props)

//     this.handleKeyUp = this.handleKeyUp.bind(this)
//     this.state = {
//       messages: [
//         // {
//         //   id: Date.now(),
//         //   content: '!cpf',
//         // },
//       ]
//     }
//   }

  
//   render() {
//   }
// }

export default Chat
