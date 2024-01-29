import "globals.css";
import { NextPage } from "next";
import products from "data.json";
import ProductItem from "components/ProductItem";
import SearchBar from "components/SearchBar";
import { useMemo, useState } from "react";
import SizeModifier from "components/SizeModifier";
import OrderBy from "components/OrderBy";

const HomePage: NextPage = () => {
    const [itemSize, setItemSize] = useState<"big" | "small">("big");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [queryString, setQueryString] = useState("");

    const visibleProducts = useMemo(() => {
        let filtered = products;
        if (queryString) {
            filtered = products.filter(el => {
                const qs = queryString.split(" ").filter(s => s);
                return qs.every(s => s && el.name.trim().toLowerCase().includes(s.toLowerCase()))
            })
        }
        return filtered.sort((a,b)=> {
            if(sortDir === "asc") {
                return a.price - b.price;
            }
            return b.price - a.price;
        });
    }, [products, queryString, sortDir]);

    return (
        <div className={`mx-auto my-5 px-5 max-w-screen-xl flex flex-col gap-5`}>
            <div className={`flex flex-col items-center gap-4 my-5 md:flex-row-reverse justify-between`} >
                <SizeModifier value={itemSize} onChange={setItemSize} />
                <div className="flex gap-2 w-full">
                    <SearchBar value={queryString} onChange={setQueryString} />
                    <OrderBy sortDir={sortDir} onChange={setSortDir} />
                </div>
            </div>
            <div className={`grid gap-4 ${itemSize === "big" ? "grid-cols-2" : "grid-cols-3"} ${itemSize === "big" ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
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
