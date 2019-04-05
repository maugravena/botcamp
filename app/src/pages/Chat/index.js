import React from 'react'
import { Link } from 'react-router-dom';

import HeaderBotcamp from '../../components/HeaderBotcamp'
import LogoBotcamp from '../../components/LogoBotcamp'
import LogoutBotcamp from '../../components/LogoutBotcamp';
import InputBotcamp from '../../components/InputBotcamp';
import ChatWrapper from '../../components/ChatWrapper';

const Chat = () => (
  <ChatWrapper>
    <HeaderBotcamp>
      <LogoBotcamp smaller/>
      <Link to='/'>
        <LogoutBotcamp />
      </Link>
    </HeaderBotcamp>
    <InputBotcamp />
  </ChatWrapper>
)

export default Chat
