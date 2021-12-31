import { useState, useEffect } from 'react';

export function useViewportScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const updateScale = () => {
      const windowViewportScale = window.visualViewport?.scale;
      if (windowViewportScale && scale !== windowViewportScale) {
        setScale(windowViewportScale);
      }
    };
    updateScale(); // for the first render

    window.addEventListener('touchend', updateScale);
    return () => {
      window.removeEventListener('touchend', updateScale);
    };
  }, []);

  return scale;
}

export const ViewportScale = ({ children }) => {
  const scale = useViewportScale();
  return children && children(scale);
};
