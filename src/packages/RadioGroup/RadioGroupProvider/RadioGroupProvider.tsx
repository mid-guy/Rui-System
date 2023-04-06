import { ReactNode, createContext, useContext } from "react";
import { RadioResponsiveColor, RadioResponsiveSize } from "../../Radio/Radio";

const RadioGroupContext = createContext<{
  value: RadioGroupContextProps;
}>({ value: {} });

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  if (context === null)
    throw Error("Radio group context has not been Provider");
  return context;
};

function RadioGroupProvider(props: RadioGroupProps) {
  const { children, ...rest } = props;
  return (
    <RadioGroupContext.Provider value={rest as any}>
      {children}
    </RadioGroupContext.Provider>
  );
}

export type RadioGroupProps = RadioGroupContextProps & { children: ReactNode };

export type RadioGroupContextProps = {
  name?: string;
  value?: string | number;
  disabled?: boolean;
  size?: RadioResponsiveSize;
  color?: RadioResponsiveColor;
  sx?: string;
};

export default RadioGroupProvider;
