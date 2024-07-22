import { events } from "../database/eventDatabase.js";

export const getAllEvents = (req, res) => {
    res.status(200).send(events);
};
