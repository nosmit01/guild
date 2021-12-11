import React from 'react'
import styled from 'styled-components'

type ComponentProps = {
  className?: string,
  children: any,
  disabled: boolean,
  onClick: Function
}

type BubbleProps = {
  onClick: any
}

const Button = styled.button<BubbleProps>`
  cursor: pointer;
`
function GuildButton({ className, children, disabled, onClick }: ComponentProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default GuildButton