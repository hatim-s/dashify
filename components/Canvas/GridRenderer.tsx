"use client";

import { Grid, GridItem } from "../Grid";
import { useCanvasContext } from "./CanvasProvider";
import Chart from "./Chart";
import ChartLong from "./ChartLong";

export default function GridRenderer() {
  const { layout } = useCanvasContext();

  return (
    <Grid rows={6} cols={8} className="gap-2">
      {layout.cells.map((cell, index) => (
        <GridItem
          position={{
            gridRowStart: cell.rowStart,
            gridRowEnd: cell.rowEnd,
            gridColumnStart: cell.colStart,
            gridColumnEnd: cell.colEnd,
          }}
          className="bg-violet-300 h-full w-full overflow-hidden"
          key={index}
        >
          <Chart />
        </GridItem>
      ))}
    </Grid>
  );
}
