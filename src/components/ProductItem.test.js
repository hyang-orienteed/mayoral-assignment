import { render, screen } from '@testing-library/react'
import ProductItem from './ProductItem';

const product1 = {
    "id": 1,
    "name": "Cotton T-Shirt",
    "price": 19.99,
    "colors": ["#FFF"],
    "imageUrl": "https://example.com/tshirt.jpg",
    "releaseDate": "2023-03-01"
};
const product2 =
{
    "id": 2,
    "name": "Denim Jeans",
    "price": 39.99,
    "colors": ["#FFF", "#000"],
    "discount": 20,
    "imageUrl": "https://example.com/jeans.jpg",
    "releaseDate": "2023-04-15"
};

test('changes the text depends on the item', () => {
    const { rerender } = render(<ProductItem product={product1} />)
    expect(screen.queryByText('colores')).toBeNull();
    expect(screen.queryAllByText('€')).toBe(1);

    // re-render the same component with different props
    rerender(<ProductItem product={product2} />)
    expect(screen.queryByText('colores')).toBe(1);
    expect(screen.queryAllByText('€')).toBe(2);
});