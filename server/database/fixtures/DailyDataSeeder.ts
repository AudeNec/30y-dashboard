import AbstractSeeder from "./AbstractSeeder";

class DailyDataSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "daily_data", truncate: true });
  }

  run() {
    const initialDate = new Date("1995-02-01");

    for (let i = 0; i < 90; i += 1) {
      const currentDate = new Date(initialDate);
      currentDate.setDate(initialDate.getDate() + i);

      const fakeDailyData = {
        date: currentDate,
        mood: Math.floor(Math.random() * 10) + 1,
        money_spent: Math.floor(Math.random() * 50) + 1,
        sport: Math.floor(Math.random() * 30) + 1,
        alcohol: Math.round(Math.random()),
        friends: Math.round(Math.random()),
        healthy_food: Math.round(Math.random()),
        working: Math.round(Math.random()),
        refName: `daily_data_${i}`,
      };

      this.insert(fakeDailyData);
    }
  }
}

export default DailyDataSeeder;
