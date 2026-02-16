const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};

//példa
/*
import { EventService } from "../services/EventService";
import { Event } from "../models/Event";
import { EventType } from "../models/EventType";

describe("EventService", () => {

  it("new cucc", async () => {
    const service = new EventService();

    const event = new Event(
      1,
      "Rock Night",
      "Budapest",
      new Date(),
      EventType.CONCERT
    );

    await service.createEvent(event);

    expect(service.getAllEvents().length).toBe(1);
  });

  it("filter cucc", async () => {
    const service = new EventService();

    const event1 = new Event(
      1,
      "Rock Night",
      "Budapest",
      new Date(),
      EventType.CONCERT
    );

    const event2 = new Event(
      2,
      "Kecske áldozat",
      "Debrecen",
      new Date(),
      EventType.CONFERENCE
    );

    await service.createEvent(event1);
    await service.createEvent(event2);

    const concerts = service.getEventsByType(EventType.CONCERT);

    expect(concerts.length).toBe(1);
    expect(concerts[0].name).toBe("Rock Night");
  });

});
*/

//npm install --save-dev jest ts-jest @types/jest parancsnak köszönhetően letöltődött a jest, ts-jest és a @types/jest csomagok, kb 6 * 10 a 23.-on fájl, nem tudom, hogy itt ez mind kell-e hozzá, nem gogom feltölteni a node_modules mappát, én nem tudom, miért történt ez, kérlek ne legyen ehhez kérdés, mert egy fejemhez fogott pisztollyal sem fogok rá tudni válaszolni.
