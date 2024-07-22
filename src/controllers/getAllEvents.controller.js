import { events } from "../database/eventDatabase";

export const getAllEvents = (req, res) => {
    res.status(200).json(events);
};