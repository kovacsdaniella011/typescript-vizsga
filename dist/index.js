"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("./models/Event");
const EventService_1 = require("./services/EventService");
const EventType_1 = require("./models/EventType");
const eventService = new EventService_1.EventService();
const concert = new Event_1.Event(1, "Metal Fest", "Budapest", new Date("2026-06-10"), EventType_1.EventType.CONCERT);
eventService.createEvent(concert)
    .then(() => console.log("Event created"))
    .catch(err => console.error(err));
