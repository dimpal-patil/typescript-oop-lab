export default interface DiscountableProduct{
    applyDiscount(price: number, discount: number): number
}