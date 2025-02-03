import { useCallback, useEffect, useState } from "react";

function Sum() {
  const [sums, setSums] = useState<{ [key: string]: number }>({
    sport: 0,
    money_spent: 0,
    mood: 0,
  });

  const getSum = useCallback((property: string) => {
    fetch(`http://localhost:3310/api/properties/${property}/sum`)
      .then((res) => res.json())
      .then((data) =>
        setSums((prevSums) => ({ ...prevSums, [property]: data[0].sum })),
      );
  }, []);

  useEffect(() => {
    ["sport", "money_spent", "mood"].forEach(getSum);
  }, [getSum]);

  return (
    <>
      {sums.sport ? (
        <p>You did {sums.sport} minutes of sport ( xxx per week).</p>
      ) : (
        <></>
      )}
      {sums.money_spent ? (
        <p>You spent {sums.money_spent} euros ( xxx per day).</p>
      ) : (
        <></>
      )}
      {sums.mood ? <p>Your average mood was xx/10.</p> : <></>}
    </>
  );
}

export default Sum;
