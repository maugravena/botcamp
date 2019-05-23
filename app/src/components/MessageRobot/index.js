import React from 'react'
import styled from 'styled-components'

import MessageBotcamp from '../../components/MessageBotcamp'

import robot from './../../img/robot.png'

const Container = styled.div`
  display: flex;
  float: left;
  width: 100%;
  margin-top: 20px;
`

const Icon = styled.span`
  width: 40px;
  height: 40px;
  background-color: #26265e;
  background-image: url(${robot});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: block;
  margin-right: 16px
`

const Message = styled(MessageBotcamp)`
  color: #333333;
  border: solid 1px #d7d7ea;
  border-radius: 0px 18px 18px 18px;
  background-color: rgba(255, 255, 255, 0.83);
  margin-top: 0;
`

function MessageRobot(props) {
  return (
    <Container>
      <Icon />
      <Message>{props.children}</Message>
    </Container>
  )
}

export default MessageRobot
