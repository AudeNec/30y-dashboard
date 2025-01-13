import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Day = {
  id: number;
  date: Date;
  mood: number;
  money_spent: number;
  sport: number;
  alcohol: boolean;
  friends: boolean;
  healthy_food: boolean;
  working: boolean;
};

class dailyRepository {
  async create(day: Omit<Day, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into daily_data (id, date, mood, money_spent, sport, alcohol, friends, healthy_food, working) values (?)",
      [day],
    );
    return result.insertId;
  }

  async read(date: Date) {
    const formattedDate = date.toISOString().split("T")[0];
    const [rows] = await databaseClient.query<Rows>(
      "select * from daily_data where date = ?",
      [formattedDate],
    );
    return rows[0] as Day;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from daily_data");
    return rows as Date[];
  }

  async update(updatedDate: Date, newValues: Partial<Day>) {
    const formattedDate = updatedDate.toISOString().split("T")[0];

    const keys = Object.keys(newValues) as (keyof Day)[];
    const setClause = keys.map((key) => `${key} = ?`).join(", ");

    const values = keys.map((key) => newValues[key] as Day[keyof Day]);

    const queryValues: (Day[keyof Day] | string)[] = [...values, formattedDate];

    const query = `
    UPDATE daily_data
    SET ${setClause}
    WHERE date = ?
  `;

    const [result] = await databaseClient.query<Result>(query, queryValues);

    return result;
  }
}

export default new dailyRepository();
