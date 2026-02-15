"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(id, name, location, date, type) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.type = type;
        this.participants = [];
    }
    addParticipant(participant) {
        this.participants.push(participant);
    }
    removeParticipant(participantId) {
        this.participants = this.participants.filter(p => p.id !== participantId);
    }
}
exports.Event = Event;
