export default function Options({ feedback, reset }) {
  return (
    <div>
      <button onClick={() => feedback("good")}>Good</button>
      <button onClick={() => feedback("neutral")}>Neutral</button>
      <button onClick={() => feedback("bad")}>Bad</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
