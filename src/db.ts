import Dexie, { type Table } from "dexie";

// One entry per calendar day. `date` is the YYYY-MM-DD local date and the
// primary key, so there is exactly one entry per day. This data is the whole
// point of the app — the schema only ever grows, never destroys.
export interface Entry {
  date: string;        // "YYYY-MM-DD" — primary key
  principleId: string; // which principle was shown that day
  text: string;        // the day's writing
  createdAt: number;   // epoch ms
  updatedAt: number;   // epoch ms
}

class MarcusDB extends Dexie {
  entries!: Table<Entry, string>;

  constructor() {
    super("marcus");
    // v1: entries keyed by the calendar date. NEVER add a destructive upgrade.
    this.version(1).stores({
      entries: "date, principleId, updatedAt",
    });
  }
}

export const db = new MarcusDB();
