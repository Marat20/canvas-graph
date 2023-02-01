import {
    places,
    vehicles
} from "../db";
import {
    axisXCoordinates,
    axisYCoordinates,
    WIDTH,
    HEIGHT
} from "./coordinates";
import {
    setCoordinates
} from "./setCoordinates";

export const setAxises = canvas => {

    const ctx = canvas.getContext(`2d`);
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx.fillStyle = 'black'; // Задаём чёрный цвет для линий
    ctx.lineWidth = 2; // Ширина линии
    ctx.beginPath(); // Запускает путь
    ctx.moveTo(65, 10); // Указываем начальный путь
    ctx.lineTo(65, 520); // Перемешаем указатель
    ctx.lineTo(1300, 520); // Ещё раз перемешаем указатель
    ctx.stroke();

    // Цикл для отображения значений по Y

    for (let i = 0; i < places.length; i++) {
        ctx.fillText(places[i], 4, i * 80 + 60);
        axisYCoordinates[places[i]] = i * 80 + 57;

        // добавляем палочки
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(60, i * 80 + 57);
        ctx.lineTo(65, i * 80 + 57);
        ctx.stroke();

        // добавляем горизонтальные линии
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.moveTo(65, i * 80 + 57);
        ctx.lineTo(WIDTH, i * 80 + 57);
        ctx.stroke();

        if (i === places.length - 1) {
            ctx.fillText('', 4, i * 80 + 120);
        }
    }

    // Цикл для отображения значений по X

    for (let i = 1; i <= 24; i++) {
        ctx.fillText(i, i * 50 + 50, 535);
        axisXCoordinates[i] = i * 50 + 52;

        // добавляем палочки
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(i * 50 + 53, 520);
        ctx.lineTo(i * 50 + 53, 525);
        ctx.stroke();

        // добавляем горизонтальные линии
        ctx.beginPath();
        ctx.lineWidth = 0.5; // Ширина линии
        ctx.moveTo(i * 50 + 53, 10);
        ctx.lineTo(i * 50 + 53, 520);
        ctx.stroke();
    }

    // Строим график

    for (const item of vehicles) {
        setCoordinates(ctx, item);
    }
}