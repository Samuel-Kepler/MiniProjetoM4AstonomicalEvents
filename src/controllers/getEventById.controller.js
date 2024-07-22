import { events } from "../database/eventDatabase";

export const getEventById = (req, res) => {
    const event = events.find(event => event.id === parseInt(req.params.id));
    if (event) {
        res.status(200).json(event);
    } else {
        res.status(404).json({ message: "Evento não encontrado" });
    }
};
