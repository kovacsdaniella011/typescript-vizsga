"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = require("./models/Event");
var EventService_1 = require("./services/EventService");
var EventType_1 = require("./models/EventType");
var eventService = new EventService_1.EventService();
var concert = new Event_1.Event(1, "Metal Fest", "Budapest", new Date("2026-06-10"), EventType_1.EventType.CONCERT);
eventService.createEvent(concert)
    .then(function () { return console.log("Rendezvény létrehozva!"); })
    .catch(function (err) { return console.error(err); });
