import { events } from "../database/eventDatabase";

export const getUpcomingEvents = (req, res) => {
    const today = new Date();
    const upcomingEvents = events.filter(event => new Date(event.date) > today);
    res.status(200).json(upcomingEvents);
};