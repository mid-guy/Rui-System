import "./InputBase.scss";
const InputBase = () => {
  return (
    <div className="form">
      <input
        type="text"
        id="email"
        className="form__input"
        autoComplete="off"
        placeholder=" "
      />
      {/* <label htmlFor="email" className="form__label">
        Email
      </label> */}
    </div>
  );
};
export default InputBase;
