import { events } from "../database/eventDatabase.js";
import { Event } from "../models/event.model.js";

export const updateEvent = (req, res) => {
    const { id } = req.params;
    const { name, date, location } = req.body;

    const eventIndex = events.findIndex(event => event.id === parseInt(id));

    if (eventIndex === -1) {
        return res.status(404).json({ message: `Evento com id ${id} não encontrado` });
    }

    const updatedEvent = new Event(name, date, location);
    updatedEvent.id = parseInt(id);

    events[eventIndex] = updatedEvent;
    res.status(200).json({ message: `Evento "${updatedEvent.name}" atualizado com sucesso`, event: updatedEvent });
};
