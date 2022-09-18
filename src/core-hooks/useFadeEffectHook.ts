import React, { useLayoutEffect } from "react";

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

export const useFadeEffectHook = (visible: boolean) => {
  const ref = React.useRef(null);
  const [state, setState] = React.useReducer(reducer, {
    isTransitioning: false,
    shouldBeVisible: false
  });
  const showRef: any = React.useRef(null);
  const visibleRef = React.useRef(false);

  const handleStart = (visible: boolean) => {
    showRef.current = window.requestAnimationFrame(() => {
      setState({
        shouldBeVisible: visible,
        type: "start"
      })
      showRef.current = null
    })
  } 

  useLayoutEffect(() => {
    if ( visibleRef.current !== visible && ( !visible || ref.current !== null )) {
      handleStart(visible);
      visibleRef.current = visible;
    } 
  },[visible])

  const _ref = (_re: any) => {
      let _element = ref.current
      ref.current = _re;
      if ( _re !== null ) {
        if (_re.addEventListener !== null) {
        }
        // if (visibleRef.current) {
        //   handleStart(true);
        // }
        return
      }
      else if ( _element !== null ) {
      }
    }
  const { isTransitioning, shouldBeVisible } = state  
  const _isTransitioning = isTransitioning || shouldBeVisible || visible;
  return { shouldBeVisible, _isTransitioning, _ref }
};
