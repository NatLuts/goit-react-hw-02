import s from "./Options.module.css";
const Options = ({ data, updateFeedback }) => {
  return (
    <div className={s.wrap}>
      {data.map((btn) => (
        <button onClick={() => updateFeedback(btn)} key={btn}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Options;
