import React, { useState } from 'react';
import styled from 'styled-components';
import cardFront from '../assets/bg-card-front.png';
import cardBack from '../assets/bg-card-back.png';
import cardLogo from '../assets/card-logo.svg';

const Card = ({ cardHolder, cardNumber, cardMonth, cardYear, cardCvv }) => {
  return (
    <CardContainer>
      <CardFront src={cardFront} />
      <CardBack src={cardBack} />
      <CardLogo src={cardLogo} />
      <CardNumber>{cardNumber ? cardNumber : '0000 0000 0000 0000'}</CardNumber>
      <CardHolder>{cardHolder ? cardHolder : 'Jane Appleseed'}</CardHolder>
      <CardExpiry>
        {cardMonth ? cardMonth : '00'}/{cardYear ? cardYear : '00'}
      </CardExpiry>
      <CardCvv>{cardCvv ? cardCvv : '000'}</CardCvv>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 541px;
  height: 527px;
  position: absolute;
  left: 164px;
  top: 187px;
  filter: drop-shadow(0px 39px 60px rgba(0, 0, 0, 0.142481));

  @media screen and (max-width: 375px) {
    width: 343px;
    height: 251px;

    left: 16px;
    top: 32px;
  }
`;

const CardFront = styled.img`
  width: 447px;
  height: 245px;

  @media screen and (max-width: 375px) {
    width: 286px;
    height: 157px;
    position: absolute;

    top: 90px;
    right: 0;
    left: 0;
    z-index: 1;
  }
`;
const CardBack = styled.img`
  margin-top: 37px;
  margin-left: 94px;
  @media screen and (max-width: 375px) {
    width: 286px;
    height: 157px;
    position: absolute;
    right: 0;
    margin: 0;
  }
`;

const CardLogo = styled.img`
  position: absolute;
  left: 7.16%;
  right: 82.34%;
  top: 6.43%;
  bottom: 69.39%;

  @media screen and (max-width: 375px) {
    width: 50px;
    /* height: 30px; */
    top: 100px;
    left: 20px;
    z-index: 2;
  }
`;

const CardNumber = styled.p`
  position: absolute;
  height: 36px;
  left: 8.16%;
  right: 9.62%;
  top: 30%;

  font-size: 28px;
  line-height: 36px;
  /* identical to box height */

  letter-spacing: 3.42222px;
  color: #ffffff;

  @media screen and (max-width: 375px) {
    font-size: 18px;
    top: 170px;
    left: 10px;
    z-index: 1;
  }
`;

const CardHolder = styled.p`
  position: absolute;
  height: 18px;
  left: 8.16%;
  right: 63.98%;
  top: 40%;

  /* Body (L) */

  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: 2px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;

  @media screen and (max-width: 375px) {
    font-size: 9px;
    top: 210px;
    left: 15px;
    z-index: 1;
  }
`;

const CardExpiry = styled.p`
  position: absolute;
  height: 18px;
  left: 8.16%;
  right: 27.62%;

  top: 40%;

  /* Body (L) */

  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: right;
  letter-spacing: 2px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;

  @media screen and (max-width: 375px) {
    font-size: 9px;
    z-index: 1;
    top: 210px;
    right: 72px;
  }
`;

const CardCvv = styled.p`
  position: absolute;
  height: 18px;
  left: 83.7%;
  right: 40.43%;
  top: 75.5%;

  /* Body (L) */

  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: right;
  letter-spacing: 2px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;

  @media screen and (max-width: 375px) {
    font-size: 9px;
    z-index: 1;
    top: 68px;
  }
`;

export default Card;
