import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './styles';

const StyledLabel = styled.div`
  background-color: ${({ color }) => color ?? '#e9ecef'};
  color: #495057;
  padding: 5px 7px;
`;

function Increment({ counter, setCounter }: any) {
  return <StyledButton onClick={() => setCounter(counter + 1)}>+</StyledButton>;
}

function Decrement({ counter, setCounter }: any) {
  return <StyledButton onClick={() => setCounter(counter - 1)}>-</StyledButton>;
}

function Label({ counter, color }: any) {
  return <StyledLabel color={color}>{counter}</StyledLabel>;
}

function Reset(props) {
  return <StyledButton>reset</StyledButton>;
}

export { Decrement, Increment, Label, Reset };
