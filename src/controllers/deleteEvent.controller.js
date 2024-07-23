import { events } from "../database/eventDatabase.js";
import fs from 'fs';

export const deleteEvent = (req, res) => {
    const { id } = req.params;
    const eventIndex = events.findIndex(event => event.id === parseInt(id));

    if (eventIndex === -1) {
        return res.status(404).json({ message: `Evento com id ${id} não encontrado` });
    }

    const deletedEvent = events.splice(eventIndex, 1)[0];

    const updatedDatabaseContent = `
import { Event } from "../models/event.model.js";
export let events = ${JSON.stringify(events, null, 4)};
    `;
    fs.writeFileSync('./src/database/eventDatabase.js', updatedDatabaseContent);

    res.status(200).json({ message: `Evento "${deletedEvent.name}" deletado com sucesso`, event: deletedEvent });
};
