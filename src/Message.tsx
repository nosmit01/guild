import React from 'react'
import styled from 'styled-components'

type BubbleProps = {
  background: string,
  isYou: boolean
}

type ComponentProps = {
  bgColor: string,
  children: any,
  date: string,
  isYou: boolean
}

const Bubble = styled.div<BubbleProps>`
  display: flex;
  flex-direction: column;
  align-self: ${({ isYou }) => isYou ? 'flex-end;' : 'flex-start;' }
  width: fit-content;
  margin-bottom: 10px;
  padding: 15px 10px 5px;
  background: ${({ background }) => background };
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
`
const Info = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 12px;
`
function Message({ bgColor, children, date, isYou }: ComponentProps) {
  return (
    <Bubble
      background={bgColor}
      isYou={isYou}
    >
      <div>{children}</div>
      <Info>
        <span>{date}</span>
      </Info>
    </Bubble>
  )
}

export default Message