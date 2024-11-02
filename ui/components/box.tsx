import { HTMLProps, PropsWithChildren } from "react";

type BoxProps = HTMLProps<HTMLDivElement>;

export default function Box(props: PropsWithChildren<BoxProps>) {
  const { children, ...rest } = props;

  return <div {...rest}>{children}</div>;
}
