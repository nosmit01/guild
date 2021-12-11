import React, { useEffect, useState } from 'react'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase.config'
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
  disabled: boolean,
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
  const [sending, setSending] = useState(false)

  useEffect(() => {
    /* Todo: move to service to separate concerns */
    const q = query(collection(db, 'chat'), orderBy('date'));
    const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
      const allMessages: MessageProps[] = []
      querySnapshot.forEach((doc: any) => { // querySnapshot doesn't support map
        const docData = doc.data()
        allMessages.push({
            ...docData,
            id: doc.id,
            bgColor: docData.username === username ? '#1338be' : '#ed9121',
            isYou: docData.username === username
          });
      });
      setMessages(allMessages)
    })

    return () => {
      unsubscribe();
   }
  }, [username])

  const handleSetInput = (e: any): void => {
    e && setInput(e.target.value)
  }

  const handleSendMessage = async(): Promise<any> => {
    try {
      setSending(true)
      await MessageService.addMessage({
        message: {
          content: input,
          username
        },
      })
      setInput('')
      setSending(false)
    } catch(e) {
      console.log(`Chat | Add Message Error: ${e}`)
      setSending(false)
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
          disabled={sending}
          onChange={handleSetInput}
          value={input}
        ></ActionsInput>
        <ActionsButton
          disabled={!input || sending}
          onClick={handleSendMessage}
        >
          { sending ? 'Sending...' : 'Send' }
        </ActionsButton>
      </Actions>
    </Wrapper>
  )
}

export default Chat