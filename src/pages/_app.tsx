import "globals.css";
import { NextPage } from "next";
import products from "data.json";
import ProductItem from "components/ProductItem";
import SearchBar from "components/SearchBar";
import { useMemo, useState } from "react";
import SizeModifier from "components/SizeModifier";
import OrderBy from "components/OrderBy";
import { matchQueryString } from "utils";
import { useSort } from "hooks";
import { Product } from "types";

const HomePage: NextPage = () => {
  const [itemSize, setItemSize] = useState<"big" | "small">("big");
  const {
    sortedData,
    sortDir,
    handleSort,
  } = useSort({
    data: products as Product[],
    initialOrder: "asc",
    initialIndex: "price"
  });

  const [queryString, setQueryString] = useState("");

  const visibleProducts = useMemo(() => {
    if (queryString) {
      return sortedData.filter(el => matchQueryString(queryString, el.name))
    }
    return sortedData;
  }, [sortedData, queryString]);

  return (
    <div className={`mx-auto my-5 px-5 max-w-screen-xl flex flex-col gap-5`}>
      <div className={`flex flex-col items-center gap-4 my-5 md:flex-row-reverse justify-between`} >
        <SizeModifier value={itemSize} onChange={setItemSize} />
        <div className="flex gap-2 w-full">
          <SearchBar value={queryString} onChange={setQueryString} />
          <OrderBy data-testid="sort" sortDir={sortDir} onChange={() => handleSort("price")} />
        </div>
      </div>
      <div data-testid="items" className={`grid gap-4 ${itemSize === "big" ? "grid-cols-2" : "grid-cols-3"} ${itemSize === "big" ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
        {visibleProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
