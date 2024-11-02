import { GridItemPosition } from "../GridItem";

export function getAdaptedPosition(
  position: GridItemPosition | undefined,
  rows: number,
  cols: number,
) {
  if (!position) return {} as GridItemPosition;

  let startRow = position.gridRowStart,
    endRow = position.gridRowEnd,
    startCol = position.gridColumnStart,
    endCol = position.gridColumnEnd;

  // adapt rows
  startRow = startRow
    ? startRow > 0
      ? Math.min(startRow, rows)
      : Math.max(startRow, -rows)
    : undefined;

  endRow = endRow
    ? endRow > 0
      ? Math.min(endRow, rows + 1)
      : Math.max(endRow, -(rows + 1))
    : undefined;

  // adapt cols
  startCol = startCol
    ? startCol > 0
      ? Math.min(startCol, cols)
      : Math.max(startCol, -cols)
    : undefined;

  endCol = endCol
    ? endCol > 0
      ? Math.min(endCol, cols + 1)
      : Math.max(endCol, -(cols + 1))
    : undefined;

  return {
    gridRowStart: startRow,
    gridRowEnd: endRow,
    gridColumnStart: startCol,
    gridColumnEnd: endCol,
  } as GridItemPosition;
}
