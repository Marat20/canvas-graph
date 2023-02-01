import { useEffect, useRef } from 'react';
import { setAxises } from './utils/setAxises.js';

export const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    setAxises(canvasRef.current);
  });

  return <canvas id='canvas' ref={canvasRef}></canvas>;
};
