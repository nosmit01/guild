import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import Input from './Controls/Input'
import Button from './Controls/Button'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 20px;
`;

const Header = styled.h1`
  height: 20px;
  text-align: center;
`;

const Messages = styled.section`
  height: 100%;
  background: #fff;
  border-radius: 5px;
`;

const Actions = styled.section`
  display: flex;
  margin: 20px 0;
`;

const ActionsInput = styled(Input)`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  margin-right: 10px;
`;

const ActionsButton = styled(Button)`
  width: 100px;
`;

function Chat() {
  return (
    <Wrapper>
      <Header>Chatroom</Header>
      <Messages>
        <Message></Message>
      </Messages>
      <Actions>
        <ActionsInput></ActionsInput>
        <ActionsButton>Send</ActionsButton>
      </Actions>
    </Wrapper>
  )
}

export default Chat