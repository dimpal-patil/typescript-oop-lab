
import DigitalProduct from "./models/DigitalProduct";
import PhysicalProduct from "./models/PhysicalProduct";
import Product from "./models/Product";
import  sortProducts  from "./utils/productSorting";
import calculateTax from "./utils/taxCalculate";


const physicalProduct = new PhysicalProduct('101', 'laptop', 1200 , 21);
const digitalProduct = new DigitalProduct('102', 'ipad', 300 , 45);

//Calucate tax based on physical Product and digital product
const products:Product[] = [physicalProduct, digitalProduct];
for (const product of products) {
    console.log(product.displayDetails());
    const finalPrice = calculateTax(product);
    console.log(`Final price: $${finalPrice}`);
}

//Print weight in KG
console.log(`Weight in KG: ${physicalProduct.weightInKg}`);

//Print filesize
console.log(`Formattted file size: ${digitalProduct.formatFileSize}`);

//Apply Discount on digital Product
console.log(digitalProduct.applyDiscount(50,10));


//Sort By name and Price
const sortedByPrice = sortProducts(products, "price");
const sortedByName = sortProducts(products, "name");
console.log(sortedByPrice.map(p => `${p.name}: $${p.price}`));
console.log(sortedByName.map(p => p.name));

//Bulk Discount
console.log(`Bulk Discount:${physicalProduct.applyBulkDiscount(10)}`)

