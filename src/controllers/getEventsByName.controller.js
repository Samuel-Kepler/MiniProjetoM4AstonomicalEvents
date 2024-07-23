import { events } from "../database/eventDatabase.js";

export const getEventsByName = (req, res) => {
    const { name } = req.params;
    console.log(`Buscando eventos com nome: ${name}`);

    const eventsByName = events.filter(event => event.name.toLowerCase().includes(name.toLowerCase()));

    if (eventsByName.length === 0) {
        res.status(404).send({ message: `Nenhum evento encontrado com o nome "${name}"` });
    } else {
        res.status(200).send(eventsByName);
    }
};
