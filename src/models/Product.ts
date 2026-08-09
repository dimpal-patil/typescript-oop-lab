export default class Product{
    sku:string;
    name:string;
    price:number;
    public static taxRate = 0.05;


    constructor(sku:string, name:string, price:number){
        this.sku =sku;
        this.name =name;
        this.price =price;
    }

    displayDetails():string{
        return `SKU:${this.sku}, Name:${this.name}, Price:${this.price} `
    }
    
    getPriceWithTax(price:number):number{
        return price *(1 + Product.taxRate)
    }

}

