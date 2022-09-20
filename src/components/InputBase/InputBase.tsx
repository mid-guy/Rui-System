/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useCallback, useRef, useState } from "react";
import useClickOutside from "../../core-hooks/useClickOutside";
import debounce from "../utils/debounce";
import "./InputBase.scss";
const InputBase = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isFocus, setFocus] = useState<boolean>(false);
  const [isTyping, setTyping] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<string | number>("");
  const menuRef = useRef<any>();
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

  const _debounce = useCallback(
    debounce(async function (value: string) {
      setTyping(false);
    }, 1000),
    []
  );

  function _onChangeField(e: any) {
    if (!isTyping) {
      setTyping(true);
    }
    setInputValues(e.target.value);
    _debounce(e.target.value);
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
        value={inputValues}
        onChange={_onChangeField}
      />
      <label htmlFor="email" className="form__label">
        Email
      </label>
      {isVisible && (
        <Menu
          isFocus={isFocus}
          isTyping={isTyping}
          _onToggleField={_onToggleField}
          _onRemoveMenu={_onRemoveMenu}
        />
      )}
    </div>
  );
};

function Menu({ isFocus, isTyping, _onToggleField, _onRemoveMenu }: any) {
  function _onFinishAnimation() {
    if (!isFocus) return _onRemoveMenu();
  }

  return (
    <div
      className={`popover-container ${isFocus ? "visible" : "hidden"}`}
      onAnimationEnd={_onFinishAnimation}
      style={{ height: isTyping ? 53 : 108 }}
    >
      {isTyping ? (
        <div style={{ padding: 16, fontSize: 16 }}>Loading...</div>
      ) : (
        <Fragment>
          <div>Menu item 1</div>
          <div>Menu item 2</div>
          <div>Menu item 3</div>
          <div>Menu item 4</div>
        </Fragment>
      )}
    </div>
  );
}
export default InputBase;
