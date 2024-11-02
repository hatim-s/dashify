"use client";

import Box from "@/ui/components/box";
import { HTMLProps, PropsWithChildren } from "react";
import { useGridContext } from "./GridProvider";
import { getAdaptedPosition } from "./utils/getAdaptedPosition";

export type GridItemPosition = {
  gridRowStart?: number;
  gridRowEnd?: number;
  gridColumnStart?: number;
  gridColumnEnd?: number;
};

type GridItemProps = {
  position?: GridItemPosition;
  className?: string;
} & HTMLProps<HTMLDivElement>;

export default function GridItem(props: PropsWithChildren<GridItemProps>) {
  const { className, ...rest } = props;

  const context = useGridContext();

  if (!context) {
    return null;
  }

  const { rows, columns } = context;
  const position = getAdaptedPosition(props.position, rows, columns);

  return (
    <Box
      {...rest}
      className={className}
      style={{
        ...position,
      }}
    >
      {props.children}
    </Box>
  );
}
