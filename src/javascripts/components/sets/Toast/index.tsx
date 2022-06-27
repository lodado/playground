import React from 'react';
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

const Container = styled.div<Props>`
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
    background: ${({ hoveredColor }) => hoveredColor};

    cursor: pointer;
    transition: background-color 205ms ease-in-out;
  }
`;

export default function Toast({
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

  return (
    <Container
      locate={locate}
      isVisible={isVisible}
      translateX={locateX}
      translateY={locateY}
      delayTime={delayTime}
      animationTime={animationTime}
      color={color}
    >
      {text}
      <XMarkImage
        onClick={() => {
          onClick();
          setVisible(false);
        }}
        hoveredColor={hoveredColor}
      >
        X
      </XMarkImage>
    </Container>
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
