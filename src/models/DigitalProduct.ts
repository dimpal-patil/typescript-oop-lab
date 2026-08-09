import Product from "./Product";
import type DiscountableProduct  from "./DiscountableProduct";

export default class DigitalProduct extends Product implements DiscountableProduct {
    fileSize:number;

    constructor(sku:string, name:string, price:number , fileSize:number){
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    override getPriceWithTax(): number {
    return this.price;
    }


    displayDetails(): string {
        return super.displayDetails() + `, Filesize : ${this.fileSize}`;
    }

    get formatFileSize():string{
        return `${this.fileSize} MB`
    }

    applyDiscount(price:number, discount: number):number{
        return price * (1 - discount / 100)
    }

}
