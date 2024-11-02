"use client";

import { Grid, GridItem } from "../Grid";
import { useCanvasContext } from "./CanvasProvider";

export default function GridRenderer() {
  const { layout } = useCanvasContext();

  return (
    <Grid rows={6} cols={6} className="gap-2">
      {layout.cells.map((cell, index) => (
        <GridItem
          position={{
            gridRowStart: cell.rowStart,
            gridRowEnd: cell.rowEnd,
            gridColumnStart: cell.colStart,
            gridColumnEnd: cell.colEnd,
          }}
          className="bg-red-300"
          key={index}
        >
          {`cell_${index}`}
        </GridItem>
      ))}
    </Grid>
  );
}
