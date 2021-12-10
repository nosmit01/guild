import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string;
  children: any;
};

const ButtonControl = styled.button``;

function Button({ className, children }: Props) {
  return (
    <ButtonControl className={className}>
      {children}
    </ButtonControl>
  )
}

export default Button