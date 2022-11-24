import React, { useState } from 'react';
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';
import desktopBG from './assets/bg-main-desktop.png';
import mobileBG from './assets/bg-main-mobile.png';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  return (
    <AppWrapper>
      <GlobalStyle />
      <LeftSide></LeftSide>
      <Form
        cardHolder={cardHolder}
        setCardHolder={setCardHolder}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardMonth={cardMonth}
        setCardMonth={setCardMonth}
        cardYear={cardYear}
        setCardYear={setCardYear}
        cardCvv={cardCvv}
        setCardCvv={setCardCvv}
      />
      <Card
        cardHolder={cardHolder}
        setCardHolder={setCardHolder}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardMonth={cardMonth}
        setCardMonth={setCardMonth}
        cardYear={cardYear}
        setCardYear={setCardYear}
        cardCvv={cardCvv}
        setCardCvv={setCardCvv}
      />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
  /* z-index: 0; */
  display: flex;
  position: relative;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  background-image: url(${desktopBG});
  background-repeat: no-repeat;
  background-size: cover;
  /* z-index: 1; */
  width: 493px;
  height: 100vh;

  @media screen and (max-width: 375px) {
    background-image: url(${desktopBG});
    width: 375px;
    height: 240px;
    position: absolute;
  }
`;

export default App;
