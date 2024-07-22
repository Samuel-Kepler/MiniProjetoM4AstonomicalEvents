let idAuto = 1;

export class Event {
    constructor(name, date, location) {
        this.id = idAuto++;
        this.name = name;
        this.date = date;
        this.location = location;
    }
}
