export function OpeningHours({ currentGym }) {
  return (
    <div>
      Opening Hours:
      <br />
      Monday: {currentGym.hours[0]}
      <br />
      Tuesday: {currentGym.hours[1]}
      <br />
      Wednesday: {currentGym.hours[2]}
      <br />
      Thursday: {currentGym.hours[3]}
      <br />
      Friday: {currentGym.hours[4]}
      <br />
      Saturday:{currentGym.hours[5]}
      <br />
      Sunday:{currentGym.hours[6]}
    </div>
  );
}
