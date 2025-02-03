import { useState } from "react";

import "./DailyColor.css";

type Data = {
  date: string;
} & Record<string, number>;

type GroupedData = Record<number, Data[]>;

function DailyColor() {
  const [alchoholData, setAlcoholData] = useState<GroupedData | null>(null);
  const [friendsData, setFriendsData] = useState<GroupedData | null>(null);
  const [healthyFoodData, setHealthyFoodData] = useState<GroupedData | null>(
    null,
  );
  const [displayData, setDisplayData] = useState<string>();

  const getArray = (
    property: string,
    setState: React.Dispatch<React.SetStateAction<GroupedData | null>>,
  ) =>
    fetch(`http://localhost:3310/api/properties/${property}`)
      .then((res) => res.json())
      .then((data: Data[]) => {
        const groupedByMonth = data.reduce((result: GroupedData, day: Data) => {
          const month = new Date(day.date).getMonth();
          if (!result[month]) {
            result[month] = [];
          }
          result[month].push(day);
          return result;
        }, {});
        setState(groupedByMonth);
      });

  const displayProperty = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayData(event.target.value);
    if (event.target.value === "alcohol") getArray("alcohol", setAlcoholData);
    else if (event.target.value === "friends") {
      getArray("friends", setFriendsData);
    } else if (event.target.value === "healthy_food") {
      getArray("healthy_food", setHealthyFoodData);
    }
  };

  return (
    <>
      <form>
        <select id="property" name="property" onChange={displayProperty}>
          <option value="">Choose something to show</option>
          <option value="alcohol">Alcohol</option>
          <option value="friends">Friends</option>
          <option value="healthy_food">Healthy food</option>
        </select>
      </form>
      <section id="display-data">
        {alchoholData && displayData === "alcohol" ? (
          Object.entries(alchoholData).map((month) => (
            <div className="month" key={month[0]}>
              {month[1].map((day) => (
                <div
                  className={`day alcohol${day.alcohol}`}
                  key={day.date.toString()}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
        {friendsData && displayData === "friends" ? (
          Object.entries(friendsData).map((month) => (
            <div className="month" key={month[0]}>
              {month[1].map((day) => (
                <div
                  className={`day friends${day.friends}`}
                  key={day.date.toString()}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
        {healthyFoodData && displayData === "healthy_food" ? (
          Object.entries(healthyFoodData).map((month) => (
            <div className="month" key={month[0]}>
              {month[1].map((day) => (
                <div
                  className={`day healthyFood${day.healthy_food}`}
                  key={day.date.toString()}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default DailyColor;
