export function VaryingOpeninghours({ currentGym }) {
  return (
    <>
      <div>
        Opening hours(playzone):
        <br />
        Monday: {currentGym.hours.playzone[0]}
        <br />
        Tuesday: {currentGym.hours.playzone[1]}
        <br />
        Wednesday: {currentGym.hours.playzone[2]}
        <br />
        Thursday: {currentGym.hours.playzone[3]}
        <br />
        Friday: {currentGym.hours.playzone[4]}
        <br />
        Saturday:{currentGym.hours.playzone[5]}
        <br />
        Sunday:{currentGym.hours.playzone[6]}
      </div>
      <br />
      <br />
      <div>
        Opening hours(playzone):
        <br />
        Monday: {currentGym.hours.boulderzone[0]}
        <br />
        Tuesday: {currentGym.hours.boulderzone[1]}
        <br />
        Wednesday: {currentGym.hours.boulderzone[2]}
        <br />
        Thursday: {currentGym.hours.boulderzone[3]}
        <br />
        Friday: {currentGym.hours.boulderzone[4]}
        <br />
        Saturday:{currentGym.hours.boulderzone[5]}
        <br />
        Sunday:{currentGym.hours.boulderzone[6]}
      </div>
    </>
  );
}
