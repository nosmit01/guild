import React, { useState } from 'react'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import Message from './Message'
import GuildInput from './Controls/GuildInput'
import GuildButton from './Controls/GuildButton'

type ActionsInputProps = {
  onChange: any,
  value: string
}

type MessageProps = {
  bgColor: string,
  content: string,
  date: any,
  isYou: boolean
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 20px;
`
const Header = styled.h1`
  height: 20px;
  text-align: center;
`
const Messages = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
`
const Actions = styled.section`
  display: flex;
  margin: 20px 0;
`
const ActionsInput = styled(GuildInput)<ActionsInputProps>`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  margin-right: 10px;
`
const ActionsButton = styled(GuildButton)`
  width: 100px;
`
function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<MessageProps>>([])

  const handleSetInput = (e: any): void => {
    e && setInput(e.target.value)
  }

  const handleSendMessage = (): void => {
    if (input) {
      setMessages([...messages, {
          bgColor: 'blue',
          content: input,
          date: '11/11/2021',
          isYou: false
      }])

      setInput('')
    }
  }

  return (
    <Wrapper>
      <Header>Chatroom</Header>
      <Messages>
        {messages.map((msg: MessageProps): ReactElement => (
          <Message
            bgColor={msg.bgColor}
            date={msg.date}
            isYou={msg.isYou}
          >
              {msg.content}
          </Message>
        ))}
      </Messages>
      <Actions>
        <ActionsInput onChange={handleSetInput} value={input}></ActionsInput>
        <ActionsButton onClick={handleSendMessage}>
          Send
        </ActionsButton>
      </Actions>
    </Wrapper>
  )
}

export default Chat