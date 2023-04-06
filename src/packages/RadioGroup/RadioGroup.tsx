import RadioGroupProvider, {
  RadioGroupProps,
} from "./RadioGroupProvider/RadioGroupProvider";

export default function RadioGroup(props: RadioGroupProps) {
  const { children, ...rest } = props;
  return <RadioGroupProvider {...rest}>{children}</RadioGroupProvider>;
}
