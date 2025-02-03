import { useState } from "react";

import type DayType from "../interface/DayType";

function Form({ date }: { date: string }) {
  const [dailyData, setDailyData] = useState<DayType>({
    date: new Date(date),
    mood: 5,
    money_spent: 0,
    sport: 0,
    alcohol: false,
    friends: false,
    healthy_food: false,
    working: false,
    clean: false,
  });

  const [modify, setModify] = useState<boolean>(false);

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;

    setDailyData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!modify) {
      fetch("http://localhost:3310/api/daily", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dailyData),
      });
      setModify(true);
    } else {
      fetch(`http://localhost:3310/api/daily/${Date.parse(date)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dailyData),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <li>
        <input
          type="checkbox"
          name="working"
          className="checkbox"
          checked={dailyData.working}
          onChange={handleChanges}
        />
        <label htmlFor="working">I worked.</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="friends"
          className="checkbox"
          checked={dailyData.friends}
          onChange={handleChanges}
        />
        <label htmlFor="friends">I met with friend(s).</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="healthy_food"
          className="checkbox"
          checked={dailyData.healthy_food}
          onChange={handleChanges}
        />
        <label htmlFor="healthy_food">I ate healthy.</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="alcohol"
          className="checkbox"
          checked={dailyData.working}
          onChange={handleChanges}
        />
        <label htmlFor="alcohol">I drank alcohol.</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="clean"
          className="checkbox"
          checked={dailyData.clean}
          onChange={handleChanges}
        />
        <label htmlFor="alcohol">I cleaned my house.</label>
      </li>
      <li>
        <label htmlFor="moneySpent">
          I spent&nbsp;
          <input
            type="text"
            name="money_spent"
            className="input-number"
            placeholder="0"
            onChange={handleChanges}
          />
          &nbsp;euros.
        </label>
      </li>
      <li>
        <label htmlFor="sport">
          I did&nbsp;
          <input
            type="text"
            name="sport"
            className="input-number"
            placeholder="0"
            onChange={handleChanges}
          />
          &nbsp;minutes of sport.
        </label>
      </li>
      <li>
        <label htmlFor="mood">
          My mood of the day&nbsp;
          <input
            type="text"
            name="mood"
            className="input-number"
            placeholder="5"
            onChange={handleChanges}
          />
          /10.
        </label>
      </li>
      <input type="submit" value="Save your day" />
    </form>
  );
}

export default Form;
