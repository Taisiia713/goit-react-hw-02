import css from "../options/Options.module.css";

export default function Options({
  handleFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div>
      <button className={css.btn} onClick={() => handleFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => handleFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => handleFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
