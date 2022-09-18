import React from "react";

const TIMEOUT = 1000;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "start":
      return {
        isTransitioning: true,
        shouldBeVisible: action.shouldBeVisible
      };
    case "finish":
      return {
        isTransitioning: false,
        shouldBeVisible: state.shouldBeVisible
      };
    default:
      return state;
  }
};

export const useFadeEffect = (visible: boolean, currentID: string) => {
  const ref = React.useRef(null);
  const [state, setState] = React.useReducer(reducer, {
    isTransitioning: false,
    shouldBeVisible: false
  });

  const { isTransitioning, shouldBeVisible } = state;
  const hiddenRef: any = React.useRef(null);
  const showRef: any = React.useRef(null);
  /**
   * clean up ref after component unmount
   */
  React.useEffect(() => {
    return () => {
      if (hiddenRef.current != null) {
        clearTimeout(hiddenRef.current);
      }
      if (showRef.current != null) {
        window.cancelAnimationFrame(showRef.current);
      }
    };
  }, []);

  const handleFinish = React.useCallback(() => {
    setState({
      type: "finish"
    });
    if (hiddenRef.current != null) {
      clearTimeout(hiddenRef.current);
      hiddenRef.current = null;
    }
  }, []);

  const handleStart = React.useCallback(
    (visible: boolean) => {
      console.log({ visible })
      if (showRef.current !== null) {
        console.log("show ref !== null")
        window.cancelAnimationFrame(showRef.current);
      }
      /**
       * request an animation show up
       */
      showRef.current = window.requestAnimationFrame(() => {
        setState({
          shouldBeVisible: visible,
          type: "start"
        });

        showRef.current = null;

        if (hiddenRef.current != null) {
          clearTimeout(hiddenRef.current);
          hiddenRef.current = setTimeout(handleFinish, TIMEOUT);
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleFinish]
  );

  const visibleRef = React.useRef(false);

  React.useLayoutEffect(() => {
    if (visibleRef.current !== visible && (!visible || ref.current != null)) {
      handleStart(visible);
      visibleRef.current = visible;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, handleStart]);

  const _ref = React.useCallback(
    (_re: any) => {
      let _element: any = ref.current;
      ref.current = _re;
      if (_re !== null) {
        if (_re.addEventListener !== null) {
          _re.addEventListener("transitionend", handleFinish);
          _re.addEventListener("webkitTransitionEnd", handleFinish);
        }
        if (visibleRef.current) {
          handleStart(true);
        }
        return
      } 
      else if (_element !== null) {
        if (_element.removeEventListener !== null) {
          _element.removeEventListener("transitionend", handleFinish);
          _element.removeEventListener("webkitTransitionEnd", handleFinish);
        }
      }
    },
    [handleFinish, handleStart]
  );
  const _isTransitioning = isTransitioning || shouldBeVisible || visible;
  return [_isTransitioning, shouldBeVisible, _ref];
};
