/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface BoxProps {
  color: string;
}

const StyledDiv = styled.div<BoxProps>`
  width: 500px;
  height: 500px;
  background-color: ${({ color }: { color: string }) => color};
`;

const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;

const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  transition: opacity 0.5s ease-in-out;
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  float: left;
`;
const Text = styled.div``;
const Center = styled.div`
  text-align: center;
`;

const image = ['red', 'blue', 'green', 'purple'];

// 원시적인 케러셀

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useLayoutEffect(() => {
    slideRef.current.style.transform = `translateX(-${500 * currentSlide}px)`;
    slideRef.current.style.opacity = '0';

    setTimeout(() => {
      slideRef.current.style.opacity = '1';
    }, 200);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide === image.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(image.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container>
      <Text>test</Text>
      <SliderContainer ref={slideRef}>
        {image.map((color, index) => (
          <StyledDiv key={`${color}${index}`} color={color} />
        ))}
      </SliderContainer>
      <Center>
        <Button onClick={prevSlide}>Prev</Button>
        <Button onClick={nextSlide}>Next</Button>
      </Center>
    </Container>
  );
}

Carousel.defaultProps = {};
