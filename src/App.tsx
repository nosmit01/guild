import React from 'react'
import Chat from './Chat'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #ffefd5;
`;

function App() {
  return (
    <Wrapper>
      <Chat></Chat>
    </Wrapper>
  );
}

export default App;
