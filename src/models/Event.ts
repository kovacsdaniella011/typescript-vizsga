import { IEvent } from "../interfaces/IEvent";
import { IParticipant } from "../interfaces/IParticipant";
import { EventType } from "./EventType";

export class Event implements IEvent {
    public participants: IParticipant[] = [];

    constructor(
        public id: number,
        public name: string,
        public location: string,
        public date: Date,
        public type: EventType
    ) {}

    addParticipant(participant: IParticipant): void {
        this.participants.push(participant);
    }

    removeParticipant(participantId: number): void {
        this.participants = this.participants.filter(p => p.id !== participantId);
    }
}