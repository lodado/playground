import { useEffect, useState } from 'react';

export interface Props {
  delayTime: number;
  translateX: number;
  translateY: number;
}

export default function useFadeIn({ translateX = 0, translateY = 0 }: Props) {
  const [isVisible, setVisible] = useState(false);
  const [locateY, setLocateY] = useState(0);
  const [locateX, setLocateX] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisible(true);
      setLocateY(translateY);
      setLocateX(translateX);
    }, 0);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return { isVisible, setVisible, locateX, locateY };
}
