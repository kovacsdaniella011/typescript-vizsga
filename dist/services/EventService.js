"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
class EventService {
    constructor() {
        this.events = [];
    }
    async createEvent(event) {
        return new Promise((resolve, reject) => {
            if (!event.name) {
                reject("Event name is required!");
            }
            this.events.push(event);
            resolve();
        });
    }
    getAllEvents() {
        return this.events;
    }
    deleteEvent(id) {
        this.events = this.events.filter(e => e.id !== id);
    }
    getEventsByType(type) {
        return this.events.filter(e => e.type === type);
    }
}
exports.EventService = EventService;
