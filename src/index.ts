import { Event } from "./models/Event";
import { EventService } from "./services/EventService";
import { EventType } from "./models/EventType";

const eventService = new EventService();

const concert = new Event(
    1,
    "Metal Fest",
    "Budapest",
    new Date("2026-06-10"),
    EventType.CONCERT
);

eventService.createEvent(concert)
    .then(() => console.log("Rendezvény létrehozva!"))
    .catch(err => console.error(err));