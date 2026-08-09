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
        return `sku:${this.sku}, name:${this.name}, price:${this.price} `
    }
    
    getPriceWithTax(price:number):number{
        return price *(1 + Product.taxRate)
    }

}

