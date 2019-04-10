import React from 'react'
import { Link } from 'react-router-dom';

import HeaderBotcamp from '../../components/HeaderBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputMessage from '../../components/InputMessage';
import ChatWrapper from '../../components/ChatWrapper';

const Chat = () => (
  <ChatWrapper>
    <HeaderBotcamp>
      <LogoBotcamp smaller/>
      <Link to='/'>
        <LogoutBotcamp />
      </Link>
    </HeaderBotcamp>
    <InputMessage />
  </ChatWrapper>
)

export default Chat
