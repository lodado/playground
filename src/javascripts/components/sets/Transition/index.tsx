import React, { Fragment, cloneElement, ReactElement } from 'react';
import styled from 'styled-components';
import useFadeIn from './useFadeIn';

interface Props {
  delayTime?: number;
  translateY?: number;
  animationTime?: number;
}

interface FadInProps extends Props {
  children: ReactElement;
}

interface WrapperProps extends Props {
  isVisible: boolean;
}

const Container = styled.div<WrapperProps>`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translateY(${({ translateY }) => `${translateY}px`});
  transition: all ${({ animationTime }) => animationTime}ms ease-in-out
    ${({ delayTime }) => delayTime}ms;
`;

export default function FadeInContainer({
  animationTime,
  delayTime,
  translateY,
  children,
}: FadInProps) {
  const { isVisible, locateY } = useFadeIn(translateY);

  return (
    <Container
      isVisible={isVisible}
      translateY={locateY}
      delayTime={delayTime}
      animationTime={animationTime}
    >
      {cloneElement(children, {
        isVisible,
      })}
    </Container>
  );
}

FadeInContainer.defaultProps = {
  delayTime: 0,
  translateY: 0,
  animationTime: 700,
};
