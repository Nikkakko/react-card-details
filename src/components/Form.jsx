import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconComplete from '../assets/icon-complete.svg';
import Completed from './Completed';

function cc_format(value) {
  const v = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .substring(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(' ') : value;
}

const Form = ({
  cardHolder,
  setCardHolder,
  cardNumber,
  setCardNumber,
  cardMonth,
  setCardMonth,
  cardYear,
  setCardYear,
  cardCvv,
  setCardCvv,
}) => {
  const [dateError, setDateError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleCardNumber = e => {
    const { value } = e.target;
    const onlyNum = value.replace(/[^\d]/g, '');
    if (onlyNum.length <= 16) {
      setCardNumber(cc_format(onlyNum));
    }
    // if (value.length <= 19) {
    //   setCardNumber(cc_format(value));
    // }
  };

  const handleCardMonth = e => {
    const { value } = e.target;

    if (value.length <= 2) {
      setCardMonth(value);
    } else return;
  };
  const handleCardYear = e => {
    const { value } = e.target;
    if (value.length <= 2) {
      setCardYear(value);
    } else return;
  };

  const handleCardCvv = e => {
    const { value } = e.target;
    if (value.length <= 3) {
      setCardCvv(value);
    } else return;
  };

  const handleSubmit = e => {
    e.preventDefault();

    // if (cardMonth.length < 1 || cardYear.length < 1) {
    //   setDateError(true);
    // } else if (cardCvv.length < 1) {
    //   setCvcError(true);
    // } else {
    //   setDateError(false);
    //   setCvcError(false);
    //   setCompleted(true);
    // }'

    if (cardMonth.length < 1 || cardYear.length < 1) {
      setDateError(true);
    } else {
      setDateError(false);
    }

    if (cardCvv.length < 1) {
      setCvcError(true);
    } else {
      setCvcError(false);
    }

    if (
      cardMonth.length > 0 &&
      cardYear.length > 0 &&
      cardCvv.length === 3 &&
      cardNumber.length > 18 &&
      cardHolder.length > 0
    ) {
      setCompleted(true);
    }
  };

  const handleCompleted = () => {
    setCompleted(false);
    //set everything to empty
    setCardHolder('');
    setCardNumber('');
    setCardMonth('');
    setCardYear('');
    setCardCvv('');
  };

  useEffect(() => {}, []);

  return (
    <FormContainer onSubmit={handleSubmit}>
      {!completed && (
        <>
          <CardHolderLabel>
            CardHolder Name
            <NameInput
              type='text'
              placeholder='e.g Jane Appleseed'
              value={cardHolder}
              onChange={e => setCardHolder(e.target.value)}
            />
          </CardHolderLabel>
          <CardNumberLabel>
            Card Number
            <NumberInput
              type='text'
              placeholder='e.g 1234 5678 9123 0000'
              value={cardNumber}
              onChange={handleCardNumber}
            />
          </CardNumberLabel>
          <DateContainer>
            <CardExpiryLabel>
              EXP.Date (MM/YY)
              <MonthInput
                type='number'
                placeholder='MM'
                value={cardMonth}
                onChange={handleCardMonth}
              />
              <YearInput
                type='number'
                placeholder='YY'
                value={cardYear}
                onChange={handleCardYear}
              />
            </CardExpiryLabel>
            <BlankErrorDate error={dateError}>Can't be blank</BlankErrorDate>

            <CardCvvLabel>
              CVC
              <CvcInput
                type='number'
                placeholder='e.g. 123'
                value={cardCvv}
                onChange={handleCardCvv}
              />
            </CardCvvLabel>
            <BlankError error={cvcError}>Can't be blank</BlankError>
          </DateContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </>
      )}
      {completed && <Completed handleCompleted={handleCompleted} />}
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 275px 227px 273px 349px;
  width: 381px;
  height: 352px;

  @media screen and (max-width: 375px) {
    width: 327px;
    height: 328px;
    margin: 331px 24px 45px 24px;
  }

  label {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;

    /* Deep Violet */

    color: #21092f;
  }

  input {
    background: #ffffff;
    /* Light Grey */
    border: 1px solid #dfdee0;
    border-radius: 8px;
    padding-left: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Deep Violet */

    color: #21092f;
    &:hover {
      /* border-image: linear-gradient(#6348fe, #610595) 1;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid; */
      background: linear-gradient(white, white) padding-box,
        linear-gradient(to right, #6348fe, #610595) border-box;
      border-radius: 8px;
      border: 1px solid transparent;
    }

    ::placeholder {
      font-size: 18px;
      line-height: 23px;
      /* identical to box height */

      /* Deep Violet */

      color: #21092f;

      mix-blend-mode: normal;
      opacity: 0.25;
      /* padding: 11px 0 11px 16px; */
    }

    //media screen
    @media screen and (max-width: 375px) {
    }
  }
`;
const CardHolderLabel = styled.label`
  width: 100%;
`;
const NameInput = styled.input`
  margin: 9px 0 26px 0;
  width: 100%;
  padding: 11px 0 11px 0px;
`;
const CardNumberLabel = styled.label`
  width: 100%;
`;
const NumberInput = styled.input`
  width: 100%;
  padding: 11px 0 11px 0px;
  margin-top: 9px;
`;
const CardExpiryLabel = styled.label`
  width: 50%;
`;

const MonthInput = styled.input`
  width: 80px;
  height: 45px;
  margin-top: 9px;

  @media screen and (max-width: 375px) {
    width: 72px;
  }
`;
const YearInput = styled.input`
  width: 80px;
  height: 45px;
  margin-left: 10px;

  @media screen and (max-width: 375px) {
    width: 72px;
  }
`;
const CvcInput = styled.input`
  width: 191px;
  height: 45px;
  margin-left: 0px;
  margin-top: 9px;

  @media screen and (max-width: 375px) {
    width: 164px;
  }
`;

const CardCvvLabel = styled.label`
  width: 50%;
`;

const DateContainer = styled.div`
  display: flex;
  /* width: 100%; */
  margin-bottom: 40px;
  margin-top: 26px;
`;

const ConfirmButton = styled.button`
  background: #21092f;
  color: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 15px 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

const BlankError = styled.span`
  display: ${props => (props.error ? 'block' : 'none')};

  position: absolute;
  right: 22%;
  top: 67.5%;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  /* Red */

  color: #ff5050;

  @media screen and (max-width: 375px) {
    right: 23%;
    top: 74%;
  }
`;

const BlankErrorDate = styled.span`
  display: ${props => (props.error ? 'block' : 'none')};
  position: absolute;
  right: 35.5%;
  top: 67.5%;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  /* Red */

  color: #ff5050;

  @media screen and (max-width: 375px) {
    left: 9%;
    top: 74.01%;
  }
`;

export default Form;
