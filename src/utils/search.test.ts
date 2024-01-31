import { matchQueryString } from "./search";
import data from "../data.json";

test("find t-shirt", () => {
    let queryString = "t-shirt";
    let result = data.filter(el => matchQueryString(queryString, el.name));
    expect(result.length).toBe(2);

    queryString = "T-shiRt";
    result = data.filter(el => matchQueryString(queryString, el.name));
    expect(result.length).toBe(2);

    queryString = "tshirt";
    result = data.filter(el => matchQueryString(queryString, el.name));
    //sweatshirt
    expect(result.length).toBe(1);
});

test("handle space", () => {
    let queryString = " ";
    let result = data.filter(el => matchQueryString(queryString, el.name));
    expect(result.length).toBe(data.length);

    queryString = "denim ";
    result = data.filter(el => matchQueryString(queryString, el.name));
    expect(result.length).toBe(1);
});