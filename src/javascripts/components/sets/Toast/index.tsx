import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import useFadeIn from './useFadeIn';

interface Props {
  text: string;
  onClick: () => void;

  locate?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };

  translateX?: number;
  translateY?: number;
  delayTime?: number;
  animationTime?: number;

  color?: string;
  hoveredColor?: string;
}

interface ToastProps extends Props {
  isVisible: boolean;
}

const Container = styled.div<any>`
  display: inline-flex;
  position: absolute;

  ${({ locate }) => {
    return Object.entries(locate).map(([name, value]) => {
      if (value > 0) {
        return `${name}:${value}px;`;
      }

      return '';
    });
  }}
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  width: 280px;
  padding: 15px;
  border-radius: 4px;

  color: #ffffff;
  align-items: center;
  background: ${({ color }) => color};
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 5px 15px 0 rgb(0 0 0 / 10%);

  text-decoration: none;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translate(${({ translateX, translateY }) => `${translateX}px, ${translateY}px`});
  transition: opacity ${({ animationTime }) => animationTime}ms ease-in-out
      ${({ delayTime }) => delayTime}ms,
    transform 200ms ease-in-out ${({ delayTime }) => delayTime}ms;

  &:hover {
    transform: translate(${({ translateX, translateY }) => `${translateX}px, ${translateY - 4}px`});
    box-shadow: 1px 1px 3px 2px gray;
    transition: all 305ms ease-in-out;
  }
`;

const XMarkImage = styled.button`
  position: absolute;

  width: 30px;
  height: 30px;

  margin: 10px;
  right: 5px;

  font-size: 15px;
  color: #fff;

  background-color: transparent;
  border: none;
  box-shadow: none;

  &:hover {
    border-radius: 9px;
    background: ${({ hoveredColor }: { hoveredColor: string }) => hoveredColor};

    cursor: pointer;
    transition: background-color 205ms ease-in-out;
  }
`;

const Portal = document.querySelector('#root'); // 쓸때 변경

export default function Toast({
  text,
  locate,
  isVisible,
  onClick,
  translateX,
  translateY,
  delayTime,
  animationTime,
  color,
  hoveredColor,
}: ToastProps) {
  return createPortal(
    <Container
      locate={locate}
      isVisible={isVisible}
      translateX={translateX}
      translateY={translateY}
      delayTime={delayTime}
      animationTime={animationTime}
      color={color}
    >
      {text}
      <XMarkImage onClick={onClick} hoveredColor={hoveredColor}>
        X
      </XMarkImage>
    </Container>,
    Portal,
  );
}

Toast.defaultProps = {
  locate: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  translateX: 10,
  translateY: 0,
  animationTime: 300,
  delayTime: 0,
  color: '#6371c2',
  hoveredColor: '#6681c2',
};

export function ExampleComponent({
  text,
  locate,
  onClick,
  translateX,
  translateY,
  delayTime,
  animationTime,
  color,
  hoveredColor,
}: Props) {
  const { isVisible, setVisible, locateX, locateY } = useFadeIn({
    delayTime,
    translateX,
    translateY,
  });

  const closeToast = () => {
    setVisible(false);
  };

  return (
    <Toast
      locate={locate}
      text={text}
      isVisible={isVisible}
      delayTime={delayTime}
      translateX={translateX}
      translateY={locateY}
      onClick={closeToast}
      animationTime={animationTime}
      color={color}
      hoveredColor={hoveredColor}
    />
  );
}

ExampleComponent.defaultProps = {
  locate: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  translateX: 10,
  translateY: 0,
  animationTime: 300,
  delayTime: 0,
  color: '#6371c2',
  hoveredColor: '#6681c2',
};
