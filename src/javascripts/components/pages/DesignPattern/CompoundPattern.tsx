/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useContext, useState, Children, createContext } from 'react';
import styled from 'styled-components';

import { Decrement, Increment, Label, Reset } from './modules';

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  border: 0.5px solid;
  gap: 0.5px;

  margin: 30px;
`;
function Counter({ children, onClick }: any) {
  const [counter, setCounter] = useState(0);
  const resetCounter = () => setCounter(0);

  return (
    <StyledDiv onClick={onClick}>
      {Children.map(children, (child) => {
        return React.cloneElement(child, {
          counter,
          resetCounter, // 그냥 첨가 가능하다는 예시용
          setCounter,
        });
      })}
    </StyledDiv>
  );
}

Counter.Reset = Reset;
Counter.Increment = Increment;
Counter.Decrement = Decrement;
Counter.Label = Label;

const Btn = styled.button`
  color: red;
`;

export default function AppEx() {
  return (
    <div>
      <Btn type="button" className="bg-black text-blue-600">
        cccc
      </Btn>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Counter onClick={() => console.log('test1')}>
        <Counter.Increment />
        <Counter.Decrement />
        <Counter.Label />
      </Counter>

      <Counter onClick={() => console.log('test2')}>
        <Counter.Increment />
        <Counter.Label color="blue" />
        <Counter.Decrement />
      </Counter>

      <Counter onClick={() => console.log('test3')}>
        <Counter.Increment />
        <Counter.Label color="red" />
      </Counter>
    </div>
  );
}
