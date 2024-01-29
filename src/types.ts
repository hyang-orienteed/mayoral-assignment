export interface Product {
    id: string | number;
    name: string;
    price: number;
    discount?: number;
    colors: string[];
    imageUrl: string;
    releaseDate: string;
}