import css from "../notification/Notification.module.css";

export default function Notification({ message }) {
  return (
    <>
      <p className={css.p}>{message}</p>
    </>
  );
}
