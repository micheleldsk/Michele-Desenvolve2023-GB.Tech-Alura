import style from "../List.module.scss";

export default function Item(props: { task: string; time: string }) {
  const { task, time } = props;
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
