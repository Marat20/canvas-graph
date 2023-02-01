import {
  axisXCoordinates,
  axisYCoordinates
} from './coordinates';
import {
  data
} from '../db';

export const setCoordinates = (ctx, car) => {
  ctx.lineWidth = 2;
  for (const item of data) {
    if (car.vehicle === item.vehicle) {
      let x = axisXCoordinates[item.time.getHours()] + item.time.getMinutes();
      let y = axisYCoordinates[item.place];
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.strokeStyle = car.color;
      ctx.stroke();
      ctx.closePath();
    }
  }
  ctx.beginPath();
  for (const item of data) {
    if (car.vehicle === item.vehicle) {
      let x = axisXCoordinates[item.time.getHours()] + item.time.getMinutes();
      let y = axisYCoordinates[item.place];
      // ctx.arc(x, y, 5, 0, Math.PI * 2)

      ctx.strokeStyle = car.color;
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
  ctx.closePath();
};