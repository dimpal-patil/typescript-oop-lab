
import DigitalProduct from "./models/DigitalProduct";
import PhysicalProduct from "./models/PhysicalProduct";
import Product from "./models/Product";
import  sortProducts  from "./utils/productSorting";
import calculateTax from "./utils/taxCalculate";


const physicalProduct = new PhysicalProduct('101', 'laptop', 1200, 25);
const digitalProduct = new DigitalProduct('102', 'charger', 300 , 34);



//Calucate tax based on physical Product and digital product
const products:Product[] = [physicalProduct, digitalProduct];
for (const product of products) {
    console.log(product.displayDetails());

    const finalPrice = calculateTax(product);

    console.log(`Final price: $${finalPrice}`);
}

//Print weight in KG
console.log(`Weight in KG: ${physicalProduct.weight}`);

//Print filesize
console.log(`Formattted file size: ${digitalProduct.fileSize}`);

//Apply Discount ondigital Product
console.log(digitalProduct.applyDiscount(50,10));


//Sort By name and Price
const sortedByPrice = sortProducts(products, "price");
const sortedByName = sortProducts(products, "name");
console.log(sortedByPrice.map(p => `${p.name}: $${p.price}`));
console.log(sortedByName.map(p => p.name));

//Bulk Discount
console.log(`Bulk Discount:${physicalProduct.applyBulkDiscount(10)}`)

