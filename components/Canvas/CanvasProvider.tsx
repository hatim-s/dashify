import { createContext, useContext } from "react";

export type Cell = {
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
};

export type CanvasContextType = {
  layout: {
    cells: Cell[];
  };
};

export const CanvasContext = createContext<CanvasContextType>({
  layout: {
    cells: [],
  },
});

export function useCanvasContext() {
  try {
    return useContext(CanvasContext);
  } catch (e) {
    throw new Error("useCanvaContext must be used within a CanvaProvider");
  }
}

export function CanvasProvider(props: {
  context: CanvasContextType;
  children: React.ReactNode;
}) {
  return (
    <CanvasContext.Provider value={props.context}>
      {props.children}
    </CanvasContext.Provider>
  );
}
