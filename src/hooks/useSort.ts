import { useState, useMemo } from "react";

type SortDirection = "asc" | "desc";

interface SortProps<T> {
  data: T[];
  initialIndex: keyof T;
  initialOrder?: SortDirection;
}

export const useSort = <T>({
  data = [],
  initialIndex,
  initialOrder = "asc",
}: SortProps<T>) => {
  const [sortDir, setSortDir] = useState<SortDirection>(initialOrder);
  const [orderBy, setOrderBy] = useState(initialIndex);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return sortDir === "asc" ? -1 : 1;
      } else if (a[orderBy] > b[orderBy]) {
        return sortDir === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  }, [sortDir, orderBy, data]);

  const handleSort = (prop: keyof T) => {
    const isAsc = orderBy === prop && sortDir === "asc";
    setSortDir(isAsc ? "desc" : "asc");
    setOrderBy(prop);
  };

  return {
    sortDir,
    orderBy,
    sortedData,
    handleSort,
  };
};
