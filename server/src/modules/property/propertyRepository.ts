import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

class propertyRepository {
  async readAllProperty({ property }: { property: string }) {
    if (
      property === "friends" ||
      property === "alcohol" ||
      property === "healthy_food"
    ) {
      const [rows] = await databaseClient.query<Rows>(
        `SELECT date, ${property} FROM daily_data`,
      );
      return rows;
    }
  }

  async readAllAndSumProperty(where?: { property: string }) {
    if (where) {
      const [result] = await databaseClient.query<Result>(
        `select sum(${where.property}) as sum from daily_data`,
      );
      return result;
    }
  }
}

export default new propertyRepository();
