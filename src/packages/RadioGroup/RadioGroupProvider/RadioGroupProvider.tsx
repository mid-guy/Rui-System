import { createContext } from "react";

const RadioGroupContext = createContext({});

function RadioGroupProvider(props: any) {
  return (
    <RadioGroupContext.Provider value={{}}>
      {props.children}
    </RadioGroupContext.Provider>
  );
}

export default RadioGroupProvider;
