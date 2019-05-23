import React from 'react'

import MessageBotcamp from '../MessageBotcamp'
import MessageRobot from '../MessageRobot'

import styled from 'styled-components'

const Container = styled.section`
  height: 100%;
  padding: 0 16px;
  overflow-y: scroll;
`

function MessagesWrapper(props) {
  const {messages} = props

  return (
    <Container> 
      {messages.map((message) => (
        <MessageBotcamp key={message.id}>
          {message.content}
        </MessageBotcamp>
      ))}
      <MessageRobot>oi</MessageRobot>
    </Container>
  )
}

// class MessagesWrapper extends Component {

//   render() {
//     const {messages} = this.props

//     return (
//       <Container> 
//         {messages.map((message) => (
//           <MessageBotcamp key={message.id}>
//             {message.content}
//           </MessageBotcamp>
//         ))}
//         <MessageRobot>oi</MessageRobot>
//       </Container>
//     )
//   }
// }


export default MessagesWrapper
