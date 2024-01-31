import { renderHook, waitFor } from "@testing-library/react";
import { useSort } from "./useSort";
import data from "../data.json";
import { Product } from "types";
import { act } from "react-dom/test-utils";

const products = data as Product[];
it("sort test", () => {
  const { result } = renderHook(() => useSort({
    data: products,
    initialOrder: "asc",
    initialIndex: "price"
  }));

  const { sortedData, handleSort } = result.current;

  const maxPrice = Math.max(...data.map(el => el.price))
  const minPrice = Math.min(...data.map(el => el.price))
  expect(sortedData[0].price).toBe(minPrice);

  // switch order
  act(() => handleSort("price"));

  waitFor(() => {
    const { sortedData } = result.current;
    expect(sortedData[0].price).toBe(maxPrice);
  })
});