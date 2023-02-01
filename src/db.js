import {
    colors
} from "./utils/colors";

export const data = [{
        id: 1,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Гараж",
        time: new Date("2023-01-31 8:00"),
        pigs: 0
    },
    {
        id: 2,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Кондровка",
        time: new Date("2023-01-31 8:27"),
        pigs: 0,
        prevId: 1
    },
    {
        id: 3,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Кондровка",
        time: new Date("2023-01-31 8:48"),
        pigs: 170,
        prevId: 2
    },
    {
        id: 4,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "МХБ",
        time: new Date("2023-01-31 10:12"),
        pigs: 170,
        prevId: 3
    },
    {
        id: 5,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "МХБ",
        time: new Date("2023-01-31 10:51"),
        pigs: 0,
        prevId: 4
    },
    {
        id: 6,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Мойка",
        time: new Date("2023-01-31 11:07"),
        pigs: 0,
        prevId: 5
    },
    {
        id: 7,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Мойка",
        time: new Date("2023-01-31 11:47"),
        pigs: 0,
        prevId: 6
    },
    {
        id: 8,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Холодное",
        time: new Date("2023-01-31 13:25"),
        pigs: 0,
        prevId: 7
    },
    {
        id: 9,
        vehicle: "a007aa77",
        driver: "Иванов Т.Т.",
        place: "Рындинка",
        time: new Date("2023-01-31 11:37"),
        pigs: 180,
    },
    {
        id: 10,
        vehicle: "a007aa77",
        driver: "Иванов Т.Т.",
        place: "Холодное",
        time: new Date("2023-01-31 11:52"),
        pigs: 180,
        prevId: 9
    },
    {
        id: 11,
        vehicle: "a107aa77",
        driver: "Филиппов Т.Т.",
        place: "Кондровка",
        time: new Date("2023-01-31 12:34"),
        pigs: 180
    },
    // {
    //     id: 12,
    //     vehicle: "a107aa77",
    //     driver: "Филиппов Т.Т.",
    //     place: "МХБ",
    //     time: new Date("2023-01-31 13:52"),
    //     pigs: 180
    // },
    {
        id: 12,
        vehicle: "о777оо777",
        driver: "Петров В.В.",
        place: "Холодное",
        time: new Date("2023-01-31 14:22"),
        pigs: 180,
        prevId: 8
    },
];

export const places = [];

for (let i = 0; i < data.length; i++) {
    if (data[i].place === 'МХБ' || data[i].place === 'Мойка') continue;
    if (!places.includes(data[i].place)) {
        places.push(data[i].place)
    }
    if (i === data.length - 1) {
        places.push('МХБ', 'Мойка')
    }
}

export const vehicles = [];

let j = 0;

for (let i = 0; i < data.length; i++) {

    if (!vehicles.find(vehicle => vehicle.vehicle === data[i].vehicle)) {
        vehicles.push({
            vehicle: data[i].vehicle,
            color: colors[j]
        })
        j++;
    }
}