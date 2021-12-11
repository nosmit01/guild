import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import GuildInput from '../../Controls/GuildInput'
import GuildButton from '../../Controls/GuildButton'

type ActionsButtonProps = {
  disabled: boolean
}

type ActionsInputProps = {
  onChange: any,
  placeholder: string,
  value: string
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 20px;
`
const Header = styled.h1`
  margin-bottom: 0;
`
const Actions = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
const ActionsInput = styled(GuildInput)<ActionsInputProps>`
  padding: 10px;
  font-size: 18px;
  margin-right: 10px;
`
const ActionsButton = styled(GuildButton)<ActionsButtonProps>`
  margin: 20px auto 0;
  padding: 10px;
  width: 200px;
  font-size: 18px;
`

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState('')

  const handleSetUsername = (e: any): void => {
    e && setInput(e.target.value)
  }

  const handleJoinChat = (): void => {
    navigate('/chat', { state: {
      username: input
    }});
  }

  return (
    <Wrapper>
      <Header>Welcome to Guild Chat</Header>
      <small>No affiliation with Guild Education... just a coincidence ;)</small>
      <Actions>
        <ActionsInput
          onChange={handleSetUsername}
          placeholder="Enter your username"
          value={input}
        ></ActionsInput>
        <ActionsButton
          onClick={handleJoinChat}
          disabled={!input}
        >
          Join chat
        </ActionsButton>
      </Actions>
    </Wrapper>
  )
}

export default Login