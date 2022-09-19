import { useRef, useState } from "react";
import useClickOutside from "../../core-hooks/useClickOutside";
import debounce from "../utils/debounce";
import "./InputBase.scss";
const InputBase = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isFocus, setFocus] = useState<boolean>(false);
  const [isTyping, setTyping] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<string | number>("");
  const menuRef = useRef<any>();
  const inputValuesRef = useRef<number | string>("");
  function _onToggleField() {
    setFocus(false);
  }
  function _onMountMenu() {
    setFocus(true);
    setVisible(true);
  }

  function _onRemoveMenu() {
    setVisible(false);
  }
  async function withTyping(callback: any) {
    setTyping(true);
    await callback;
    setTyping(false);
  }
  function _onChangeField(e: any) {
    console.log(e.target.value);
    debounce(() => new Promise((resolve) => resolve(() => console.log("123"))));
    // return () => new Promise((resolve) => resolve(() => console.log("render")));
  }
  useClickOutside(menuRef, _onToggleField);
  return (
    <div
      className="form container-menu"
      onClick={!isVisible ? _onMountMenu : () => {}}
      ref={menuRef}
    >
      <input
        type="text"
        id="email"
        className="form__input"
        autoComplete="off"
        placeholder=" "
        onChange={_onChangeField}
        value={isTyping ? inputValuesRef.current : inputValues}
      />
      <label htmlFor="email" className="form__label">
        Email
      </label>
      {isVisible && (
        <Menu
          isFocus={isFocus}
          _onToggleField={_onToggleField}
          _onRemoveMenu={_onRemoveMenu}
        />
      )}
    </div>
  );
};

function Menu({ isFocus, _onToggleField, _onRemoveMenu }: any) {
  function _onFinishAnimation() {
    if (!isFocus) return _onRemoveMenu();
  }

  return (
    <div
      className={`popover-container ${isFocus ? "visible" : "hidden"}`}
      onAnimationEnd={_onFinishAnimation}
    >
      <div>Menu item 1</div>
      <div>Menu item 2</div>
      <div>Menu item 3</div>
      <div>Menu item 4</div>
    </div>
  );
}
export default InputBase;
