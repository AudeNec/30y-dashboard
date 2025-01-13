import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

class propertyRepository {
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
