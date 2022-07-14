import { useEffect, useState } from 'react';

export default function useFadeIn(translateY: number) {
  const [isVisible, setVisible] = useState(false);
  const [locateY, setLocateY] = useState(0);

  useEffect(() => {
    setVisible(true);
    setLocateY(translateY);
  }, []);

  return { isVisible, locateY };
}
