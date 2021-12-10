import React from 'react'
import styled from 'styled-components'

type ComponentProps = {
  className?: string,
  onChange: any,
  placeholder?: string,
  value: string
}

const Input = styled.input`

`
function GuildInput({ className, onChange, placeholder, value }: ComponentProps) {
  return (
    <Input
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  )
}

export default GuildInput