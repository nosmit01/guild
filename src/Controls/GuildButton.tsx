import React from 'react'
import styled from 'styled-components'

type ComponentProps = {
  className?: string,
  children: any,
  onClick: Function
}

type BubbleProps = {
  onClick: any
}

const Button = styled.button<BubbleProps>`
  cursor: pointer;
`
function GuildButton({ className, children, onClick }: ComponentProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default GuildButton