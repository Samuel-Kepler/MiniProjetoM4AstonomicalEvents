import { events } from "../database/eventDatabase.js";
import { Event } from "../models/event.model.js";

export const addEvent = (req, res) => {
    const { name, date, location } = req.body;

    if (!name || !date || !location) {
        return res.status(400).send({ message: "Nome, data e localização são obrigatórios." });
    }

    const newEvent = new Event(name, date, location);
    events.push(newEvent);

    res.status(201).send(newEvent);
};
