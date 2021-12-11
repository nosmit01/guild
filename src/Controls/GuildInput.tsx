import React from 'react'
import styled from 'styled-components'

type ComponentProps = {
  className?: string,
  disabled?: boolean,
  onChange: any,
  placeholder?: string,
  value: string
}

const Input = styled.input`

`
function GuildInput({ className, disabled, onChange, placeholder, value }: ComponentProps) {
  return (
    <Input
      className={className}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  )
}

export default GuildInput