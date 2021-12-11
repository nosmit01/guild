import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Wrapper = styled.section`
  background: #ffefd5;
`
ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
