import type Product from "../models/Product";

function sortProducts(products: Product[], sortBy: 'price' | 'name'): Product[] {
    return [...products].sort((productA, productB) => {
        if (sortBy === 'price') {
            return productA.price - productB.price;
        }
        return productA.name.localeCompare(productB.name);
    });
}

export default sortProducts;
