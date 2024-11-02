import { clsx } from "clsx";
import { PropsWithChildren } from "react";

type StackProps = {
  direction: "row" | "column";
  className?: string;
};

export default function Stack(props: PropsWithChildren<StackProps>) {
  const className =
    props.direction === "row" ? "flex flex-row" : "flex flex-col";
  return (
    <div className={clsx(props.className, className)}>{props.children}</div>
  );
}
