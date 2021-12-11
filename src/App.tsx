import React from 'react'
import Chat from './Modules/Chat/Index'
import Login from './Modules/Login/Index'
import styled from 'styled-components'
import { Routes, Route } from "react-router-dom";

const Wrapper = styled.section`
  background: #ffefd5;
`
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
