import RadioGroupProvider from "./RadioGroupProvider/RadioGroupProvider";

export default function RadioGroup(props: any) {
  const { children, ...rest } = props;
  return <RadioGroupProvider value={rest}>{children}</RadioGroupProvider>;
}
