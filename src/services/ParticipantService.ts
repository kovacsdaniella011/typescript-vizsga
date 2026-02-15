import { Participant } from "../models/Participant";

export class ParticipantService {
    private participants: Participant[] = [];

    addParticipant(participant: Participant): void {
        this.participants.push(participant);
    }

    getAllParticipants(): Participant[] {
        return this.participants;
    }

    removeParticipant(id: number): void {
        this.participants = this.participants.filter(p => p.id !== id);
    }
}