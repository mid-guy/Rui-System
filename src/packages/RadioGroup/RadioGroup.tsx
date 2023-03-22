import RadioGroupProvider from "./RadioGroupProvider/RadioGroupProvider";

export default function RadioGroup(props: any) {
  return <RadioGroupProvider>{props.children}</RadioGroupProvider>;
}
