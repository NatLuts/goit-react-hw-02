import s from "./Options.module.css";
const Options = ({ data, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.wrap}>
      {data.map((btn) => (
        <button onClick={() => updateFeedback(btn)} key={btn}>
          {btn}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
