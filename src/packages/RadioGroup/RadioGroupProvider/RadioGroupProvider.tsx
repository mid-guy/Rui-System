import { createContext, useContext } from "react";

const RadioGroupContext = createContext<{
  value: { name?: string; value?: string | number; disabled?: boolean };
}>({ value: {} });

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  if (context === null)
    throw Error("Radio group context has not been Provider");
  return context;
};

function RadioGroupProvider(props: any) {
  const { children, ...rest } = props;
  return (
    <RadioGroupContext.Provider value={rest}>
      {children}
    </RadioGroupContext.Provider>
  );
}

export default RadioGroupProvider;
