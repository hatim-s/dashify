"use client";

import Box from "@/ui/components/box";
import { CanvasContextType, CanvasProvider } from "./CanvasProvider";
import GridRenderer from "./GridRenderer";

const CONTEXT: CanvasContextType = {
  layout: {
    cells: [
      { rowStart: 1, rowEnd: 3, colStart: 1, colEnd: 4 },
      { rowStart: 1, rowEnd: 5, colStart: 4, colEnd: -1 },
      { rowStart: 3, rowEnd: -1, colStart: 1, colEnd: 4 },
      { rowStart: 5, rowEnd: -1, colStart: 4, colEnd: -1 },
    ],
  },
};
export default function Canvas() {
  return (
    <Box className="size-11/12 bg-white rounded-lg self-center justify-self-center my-auto overflow-hidden p-4">
      <CanvasProvider context={CONTEXT}>
        <GridRenderer />
      </CanvasProvider>
    </Box>
  );
}
