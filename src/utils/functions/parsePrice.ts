export function parsePrice(price: string): number {
    return parseFloat(price.trim().replace(',', '.'));
}