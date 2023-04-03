import { createContext, useContext } from "react";
import { RadioPropsSize, RaidoPropsColor } from "../../Radio/Radio";

const RadioGroupContext = createContext<{
  value: {
    name?: string;
    value?: string | number;
    disabled?: boolean;
    size?: RadioPropsSize;
    color?: RaidoPropsColor;
    sx?: string;
  };
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
