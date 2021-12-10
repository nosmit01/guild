import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string;
};

const InputControl = styled.input`

`;

function Input({ className }: Props) {
  return (
    <InputControl
      className={className}
      type="text"
    />
  )
}

export default Input