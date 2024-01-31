export const matchQueryString =(queryString: string, target:string):boolean => {
    const qs = queryString.split(" ").filter(s => s);
    return qs.every(s => s && target.trim().toLowerCase().includes(s.toLowerCase()))
}