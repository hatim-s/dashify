"use client";

import { PropsWithChildren, createContext, useContext } from "react";

type GridContextType = {
  rows: number;
  columns: number;
};

const GridContext = createContext<GridContextType>({
  rows: 1,
  columns: 1,
});

function useGridContext(): GridContextType {
  try {
    return useContext(GridContext);
  } catch (e) {
    throw new Error("useGridContext must be used within a GridProvider");
  }
}

function GridProvider(props: PropsWithChildren<GridContextType>) {
  const { rows, columns } = props;
  return (
    <GridContext.Provider value={{ rows, columns }}>
      {props.children}
    </GridContext.Provider>
  );
}

export { GridContext, GridProvider, useGridContext };
