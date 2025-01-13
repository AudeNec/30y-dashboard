import { useState } from "react";

import type DayType from "../interface/DayType";

function Form({ date }: { date: string }) {
  const [dailyData, setDailyData] = useState<DayType>({
    date: new Date(date),
    mood: 5,
    moneySpent: 0,
    sport: 0,
    alcohol: false,
    friends: false,
    healthyFood: false,
    working: false,
  });

  const [modify, setModify] = useState<boolean>(false);

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDailyData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!modify) {
      fetch("http://localhost:3310/api/dailyData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dailyData),
      });
      setModify(true);
    } else {
      fetch(`http://localhost:3310/api/dailyData/${Date.parse(date)}`, {
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
          onChange={handleChanges}
        />
        <label htmlFor="working">I worked.</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="friends"
          className="checkbox"
          onChange={handleChanges}
        />
        <label htmlFor="friends">I met with friend(s).</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="healthyFood"
          className="checkbox"
          onChange={handleChanges}
        />
        <label htmlFor="healthyFood">I ate healthy.</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="alcohol"
          className="checkbox"
          onChange={handleChanges}
        />
        <label htmlFor="alcohol">I drank alcohol.</label>
      </li>
      <li>
        <label htmlFor="moneySpent">
          I spent&nbsp;
          <input
            type="text"
            name="moneySpent"
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
