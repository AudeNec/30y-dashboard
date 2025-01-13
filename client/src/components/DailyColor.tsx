// import { useState } from "react";

import "./DailyColor.css";

function DailyColor() {
  // const [alchoholData, setAlcoholData] = useState();
  // const [friendsData, setFriendsData] = useState();
  // const [healthyFoodData, setHealthyFoodData] = useState();
  // const [displayData, setDisplayData] = useState<string>();

  // const getArray = (property : string, setState : ) =>
  //   fetch(`http://localhost:3310/api/daily/property/${property}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const groupedByMonth = Object.groupBy(data, (day) => {
  //         const month = new Date(Number(day.date)).getMonth();
  //         return month;
  //       });
  //       setState(groupedByMonth);
  //     });

  // const displayProperty = (event) => {
  //   setDisplayData(event.target.value);
  //   if (event.target.value === "alcohol") getArray("alcohol", setAlcoholData);
  //   else if (event.target.value === "friends") {
  //     getArray("friends", setFriendsData);
  //   } else if (event.target.value === "healthyFood") {
  //     getArray("healthyFood", setHealthyFoodData);
  //   }
  // };

  return (
    <>
      {/* <form>
        <select id="property" name="property" onChange={displayProperty}>
          <option value="">Choose something to show</option>
          <option value="alcohol">Alcohol</option>
          <option value="friends">Friends</option>
          <option value="healthyFood">Healthy food</option>
        </select>
      </form>
      <section id="display-data">
        {alchoholData && displayData === "alcohol" ? (
          Object.entries(alchoholData).map((month) => (
            <div className="month" key={month[0]}>
              {month[1].map((day) => (
                <div className={`day alcohol${day.value}`} key={day.date}>
                  {""}
                </div>
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
                <div className={`day friends${day.value}`} key={day.date}>
                  {""}
                </div>
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
        {healthyFoodData && displayData === "healthyFood" ? (
          Object.entries(healthyFoodData).map((month) => (
            <div className="month" key={month[0]}>
              {month[1].map((day) => (
                <div className={`day healthyFood${day.value}`} key={day.date}>
                  {""}
                </div>
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </section> */}
    </>
  );
}

export default DailyColor;
