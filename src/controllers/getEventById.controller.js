import { events } from "../database/eventDatabase.js";

export const getEventById = (req, res) => {
    const event = events.find(event => event.id === parseInt(req.params.id));
    if (event) {
        res.status(200).send(event);
    } else {
        res.status(404).send({ message: "Evento não encontrado" });
    }
};
