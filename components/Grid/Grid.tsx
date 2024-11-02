"use client";

import { clsx } from "clsx";
import { PropsWithChildren } from "react";
import { GridProvider } from "./GridProvider";

type GridProps = {
  rows: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
};

export default function Grid(props: PropsWithChildren<GridProps>) {
  return (
    <GridProvider rows={props.rows} columns={props.cols}>
      <div
        className={clsx("w-full h-full", props.className)}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
          gridTemplateRows: `repeat(${props.rows}, 1fr)`,
        }}
      >
        {props.children}
      </div>
    </GridProvider>
  );
}
