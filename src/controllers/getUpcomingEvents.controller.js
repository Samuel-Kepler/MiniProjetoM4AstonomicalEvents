import { events } from "../database/eventDatabase.js";

export const getUpcomingEvents = (req, res) => {
    const today = new Date();
    const upcomingEvents = events.filter(event => new Date(event.date) > today);
    res.status(200).send(upcomingEvents);
};
