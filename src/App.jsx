import { useEffect, useRef } from 'react';
import { chart } from './utils/chart.js';

export const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    chart(canvasRef.current);
  });

  return <canvas id='canvas' ref={canvasRef}></canvas>;
};
