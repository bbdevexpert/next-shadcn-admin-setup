import { Button } from "@/components/ui/button";

export default function CommonButton(props) {
  const { name, ...rest } = props;
  return <Button {...rest}>{name}</Button>;
}
