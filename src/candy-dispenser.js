import { useState } from "react";

export const CandyDispenser = () => {
  const intitialCandies = ["Snickers", "M&M", "Twix", "Galaxy", "Milky Way"];
  const [candies, setCandies] = useState(intitialCandies);
  const dispense = (candy) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  };
  return (
    <>
      <h2>Candy Dispenser</h2>
      Available candies
      {candies.length === 0 ? (
        <button onClick={() => setCandies(intitialCandies)}>Refill</button>
      ) : (
        <ul>
          {candies.map((candy) => (
            <li>
              <button onClick={() => dispense(candy)}>Grab {candy}</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
