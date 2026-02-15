"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(id, name, location, date, type) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.type = type;
        this.participants = [];
    }
    Event.prototype.addParticipant = function (participant) {
        this.participants.push(participant);
    };
    Event.prototype.removeParticipant = function (participantId) {
        this.participants = this.participants.filter(function (p) { return p.id !== participantId; });
    };
    return Event;
}());
exports.Event = Event;
