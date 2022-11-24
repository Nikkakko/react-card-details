import React from 'react';
import styled from 'styled-components';
import iconComplete from '../assets/icon-complete.svg';

const Completed = ({ handleCompleted }) => {
  return (
    <Container>
      <Icon src={iconComplete} alt='icon-complete' />
      <Text>Thank you!</Text>
      <SubText>We’ve added your card details</SubText>
      <ContinueButton onClick={handleCompleted}>Continue</ContinueButton>
    </Container>
  );
};

const Container = styled.div`
  width: 381px;
  height: 291px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 375px) {
    width: 327px;
    height: 291px;
    justify-content: center;
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const Text = styled.h1`
  margin-top: 35px;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 3.42222px;

  /* Deep Violet */

  color: #21092f;
  text-transform: uppercase;
`;

const SubText = styled.p`
  margin-top: 16px;
  margin-bottom: 48px;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;

  /* Purplish Grey */

  color: #8f8694;
`;

const ContinueButton = styled.button`
  padding: 15px 151px;
  background: #21092f;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* White */

  color: #ffffff;

  @media screen and (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export default Completed;
