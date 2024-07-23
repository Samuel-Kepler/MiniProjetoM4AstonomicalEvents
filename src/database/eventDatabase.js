import { Event } from "../models/event.model.js";
export let events = [
    {
        "id": 1,
        "name": "Chuva de Meteoros Quadrantidas",
        "date": "2020-01-04",
        "location": "Global"
    },
    {
        "id": 2,
        "name": "Eclipse Solar Anular",
        "date": "2020-06-21",
        "location": "África, Ásia"
    },
    {
        "id": 3,
        "name": "Eclipse Lunar Penumbral",
        "date": "2020-07-05",
        "location": "América do Norte, América do Sul"
    },
    {
        "id": 4,
        "name": "Chuva de Meteoros Perseidas",
        "date": "2020-08-12",
        "location": "Global"
    },
    {
        "id": 5,
        "name": "Eclipse Lunar Penumbral",
        "date": "2020-11-30",
        "location": "América do Norte, América do Sul"
    },
    {
        "id": 6,
        "name": "Eclipse Solar Total",
        "date": "2020-12-14",
        "location": "América do Sul"
    },
    {
        "id": 7,
        "name": "Chuva de Meteoros Geminidas",
        "date": "2020-12-14",
        "location": "Global"
    },
    {
        "id": 8,
        "name": "Chuva de Meteoros Quadrantidas",
        "date": "2021-01-03",
        "location": "Global"
    },
    {
        "id": 9,
        "name": "Eclipse Lunar Total",
        "date": "2021-05-26",
        "location": "América do Norte, América do Sul, Ásia, Austrália"
    },
    {
        "id": 10,
        "name": "Eclipse Solar Anular",
        "date": "2021-06-10",
        "location": "África, Ásia, Europa"
    },
    {
        "id": 11,
        "name": "Chuva de Meteoros Perseidas",
        "date": "2021-08-12",
        "location": "Global"
    },
    {
        "id": 12,
        "name": "Eclipse Lunar Parcial",
        "date": "2021-11-19",
        "location": "América do Norte, América do Sul, Ásia, Austrália"
    },
    {
        "id": 13,
        "name": "Chuva de Meteoros Geminidas",
        "date": "2021-12-14",
        "location": "Global"
    },
    {
        "id": 14,
        "name": "Chuva de Meteoros Quadrantidas",
        "date": "2022-01-04",
        "location": "Global"
    },
    {
        "id": 15,
        "name": "Eclipse Solar Parcial",
        "date": "2022-04-30",
        "location": "América do Sul, Pacífico"
    },
    {
        "id": 16,
        "name": "Eclipse Lunar Total",
        "date": "2022-05-16",
        "location": "América do Norte, América do Sul, Europa, África"
    },
    {
        "id": 17,
        "name": "Chuva de Meteoros Perseidas",
        "date": "2022-08-13",
        "location": "Global"
    },
    {
        "id": 18,
        "name": "Eclipse Solar Parcial",
        "date": "2022-10-25",
        "location": "Europa, Ásia, África"
    },
    {
        "id": 19,
        "name": "Eclipse Lunar Total",
        "date": "2022-11-08",
        "location": "Ásia, Austrália, Pacífico, América do Norte, América do Sul"
    },
    {
        "id": 20,
        "name": "Chuva de Meteoros Geminidas",
        "date": "2022-12-14",
        "location": "Global"
    },
    {
        "id": 21,
        "name": "Chuva de Meteoros Quadrantidas",
        "date": "2023-01-04",
        "location": "Global"
    },
    {
        "id": 22,
        "name": "Eclipse Solar Híbrido",
        "date": "2023-04-20",
        "location": "Pacífico, Oceania, Sudeste Asiático, Antártida"
    },
    {
        "id": 23,
        "name": "Eclipse Lunar Penumbral",
        "date": "2023-05-05",
        "location": "Europa, África, Ásia, Austrália"
    },
    {
        "id": 24,
        "name": "Chuva de Meteoros Perseidas",
        "date": "2023-08-13",
        "location": "Global"
    },
    {
        "id": 25,
        "name": "Eclipse Solar Anular",
        "date": "2023-10-14",
        "location": "Pacífico, América do Norte, América do Sul"
    },
    {
        "id": 26,
        "name": "Eclipse Lunar Parcial",
        "date": "2023-10-28",
        "location": "Europa, Ásia, África, Oceania"
    },
    {
        "id": 27,
        "name": "Chuva de Meteoros Geminidas",
        "date": "2023-12-14",
        "location": "Global"
    },
    {
        "id": 28,
        "name": "Eclipse Lunar Total",
        "date": "2024-04-08",
        "location": "América do Norte, América Central, América do Sul"
    },
    {
        "id": 29,
        "name": "Chuva de Meteoros Liridas",
        "date": "2024-04-22",
        "location": "Global"
    },
    {
        "id": 30,
        "name": "Eclipse Solar Anular",
        "date": "2024-10-02",
        "location": "Oceano Pacífico, América do Norte, América Central"
    },
    {
        "id": 31,
        "name": "Eclipse Lunar Parcial",
        "date": "2024-10-08",
        "location": "Ásia, Oceania, América do Norte"
    },
    {
        "id": 32,
        "name": "Chuva de Meteoros Orionidas",
        "date": "2024-10-21",
        "location": "Global"
    },
    {
        "id": 33,
        "name": "Eclipse Solar Parcial",
        "date": "2024-10-25",
        "location": "África, Oriente Médio, Ásia Central"
    },
    {
        "id": 34,
        "name": "Chuva de Meteoros Leonidas",
        "date": "2024-11-17",
        "location": "Global"
    },
    {
        "id": 35,
        "name": "Eclipse Lunar Total",
        "date": "2024-11-28",
        "location": "África, Europa, Ásia"
    },
    {
        "id": 36,
        "name": "Chuva de Meteoros Geminidas",
        "date": "2024-12-14",
        "location": "Global"
    },
    {
        "id": 37,
        "name": "Chuva de Meteoros Úrsidas",
        "date": "2024-12-22",
        "location": "Global"
    },
    {
        "id": 38,
        "name": "Eclipse Solar Parcial Atualizado",
        "date": "2025-04-25",
        "location": "Ásia, Europa"
    },
    {
        "id": 39,
        "name": "Eclipse Solar Parcial Atualizado",
        "date": "2025-04-25",
        "location": "Ásia, Europa"
    },
    {
        "id": 40,
        "name": "Eclipse Lunar Total",
        "date": "2025-03-14",
        "location": "América do Norte, América do Sul, Europa, África"
    },
    {
        "id": 41,
        "name": "Chuva de Meteoros Liridas",
        "date": "2025-04-22",
        "location": "Global"
    },
    {
        "id": 42,
        "name": "Eclipse Solar Anular",
        "date": "2025-09-21",
        "location": "Oceano Pacífico, América do Norte"
    },
    {
        "id": 43,
        "name": "Chuva de Meteoros Orionidas",
        "date": "2025-10-21",
        "location": "Global"
    },
    {
        "id": 44,
        "name": "Eclipse Lunar Parcial",
        "date": "2025-10-17",
        "location": "América do Norte, América do Sul, Europa, África"
    },
    {
        "id": 45,
        "name": "Chuva de Meteoros Leonidas",
        "date": "2025-11-17",
        "location": "Global"
    },
    {
        "id": 46,
        "name": "Chuva de Meteoros Geminidas",
        "date": "2025-12-14",
        "location": "Global"
    },
    {
        "id": 47,
        "name": "Chuva de Meteoros Úrsidas",
        "date": "2025-12-22",
        "location": "Global"
    }
];
