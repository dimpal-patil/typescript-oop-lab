import Product from "./Product";

export default class PhysicalProduct extends Product{
    weight: number;
    private threshold = 20;

    constructor(sku:string , name:string , price:number , weight:number){
        super(sku,name,price);
        this.weight = weight;
    }

    displayDetails(): string {
        return super.displayDetails() + `, Weight : ${this.weight}`;
    }

    override getPriceWithTax(): number {
        return this.price * (1 + 0.1)
    }


    get weightInKg():string{
        return `${this.weight} KG`;
    }

    applyBulkDiscount(discount:number): number{
        if (this.weight >= this.threshold) {
            return this.price * (1 - discount / 100);
        }
        else{
            return this.price
        }
        }
    }


