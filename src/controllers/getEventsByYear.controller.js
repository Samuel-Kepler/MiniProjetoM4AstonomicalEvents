import { events } from "../database/eventDatabase.js";

export const getEventsByYear = (req, res) => {
    const { year } = req.params;
    console.log(`Buscando eventos para o ano: ${year}`);

    const eventsByYear = events.filter(event => {
        const eventYear = new Date(event.date).getFullYear();
        return eventYear === parseInt(year);
    });

    if (eventsByYear.length === 0) {
        res.status(404).send({ message: `Nenhum evento encontrado para o ano de ${year}` });
    } else {
        res.status(200).send(eventsByYear);
    }
};
