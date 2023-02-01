import { axisXCoordinates, axisYCoordinates } from './coordinates';
import { data } from '../db';

export const setCoordinates = (ctx, car) => {
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (const item of data) {
    if (car.vehicle === item.vehicle) {
      ctx.strokeStyle = car.color;
      ctx.lineTo(
        axisXCoordinates[item.time.getHours()] + item.time.getMinutes(),
        axisYCoordinates[item.place]
      );
    }
  }
  ctx.stroke();
  ctx.closePath();
};
