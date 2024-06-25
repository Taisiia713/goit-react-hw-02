import css from "../feedback/Feedback.module.css";

export default function Feedback({ feedback, positiveFeedbackPersent, total }) {
  return (
    <div>
      <p className={css.p}>Good: {feedback.good}</p>
      <p className={css.p}>Neutral: {feedback.neutral}</p>
      <p className={css.p}>Bad: {feedback.bad}</p>
      <p className={css.p}>Total:{total}</p>
      <p className={css.p}>Positive: {positiveFeedbackPersent()}%</p>
    </div>
  );
}
