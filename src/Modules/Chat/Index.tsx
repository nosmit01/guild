import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Message from './Message'
import MessageService from './Message.service'
import GuildInput from '../../Controls/GuildInput'
import GuildButton from '../../Controls/GuildButton'

type ActionsButtonProps = {
  disabled: boolean
}

type ActionsInputProps = {
  onChange: any,
  value: string
}

type MessageProps = {
  id?: string,
  bgColor?: string,
  content?: string,
  dateFormatted?: string,
  isYou?: boolean,
  username?: string
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
  overflow-y: scroll;
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
const ActionsButton = styled(GuildButton)<ActionsButtonProps>`
  width: 100px;
`
function Chat() {
  const location = useLocation();
  const username = location.state?.username ?? ''
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<MessageProps>>([])

  useEffect(() => {
    handleFetchAllMessages()
  }, [messages.length]);

  const handleSetInput = (e: any): void => {
    e && setInput(e.target.value)
  }

  const handleSendMessage = async(): Promise<any> => {
    try {
      await MessageService.addMessage({
        message: {
          content: input,
          username
        },
      })
      setInput('')
      handleFetchAllMessages()
    } catch(e) {
      console.log(`Chat | Add Message Error: ${e}`)
    }
  }

  const handleFetchAllMessages = async(): Promise<any> => {
    try {
      const allMessages = await MessageService.getMessages({ loggedInUser: username })
      setMessages(allMessages)
    } catch(e) {
      console.log(`Chat | Fetch All Messages Error: ${e}`)
    }
  }

  return (
    <Wrapper>
      <Header>Chatroom</Header>
      <Messages>
        {messages.map((msg: MessageProps): ReactElement => (
          <Message
            key={msg.id}
            bgColor={msg.bgColor || ''}
            date={msg.dateFormatted || ''}
            isYou={msg.isYou || false}
          >
              {msg.content}
          </Message>
        ))}
      </Messages>
      <Actions>
        <ActionsInput
          onChange={handleSetInput}
          value={input}
        ></ActionsInput>
        <ActionsButton
          onClick={handleSendMessage}
          disabled={!input}
        >
          Send
        </ActionsButton>
      </Actions>
    </Wrapper>
  )
}

export default Chat