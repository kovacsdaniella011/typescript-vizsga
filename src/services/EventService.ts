import { Event } from "../models/Event";
import { EventType } from "../models/EventType";

export class EventService {
    private events: Event[] = [];

    async createEvent(event: Event): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!event.name) {
                return reject("Kérjük add meg a rendezvény nevét!");
            }
            this.events.push(event);
            resolve();
        });
    }

    getAllEvents(): Event[] {
        return this.events;
    }

    deleteEvent(id: number): void {
        this.events = this.events.filter(e => e.id !== id);
    }

    getEventsByType(type: EventType): Event[] {
        return this.events.filter(e => e.type === type);
    }
}