import React from 'react'
import styled from 'styled-components'

type ComponentProps = {
  className?: string,
  onChange: any,
  value: string
}

const Input = styled.input`

`
function GuildInput({ className, onChange, value }: ComponentProps) {
  return (
    <Input
      className={className}
      onChange={onChange}
      type="text"
      value={value}
    />
  )
}

export default GuildInput