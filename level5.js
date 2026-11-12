const price = 2500;
let qty = 3;

let total = price * qty;

console.log(`Total: ${total} RWF`);

let discount = 0.1;

discount = 0.2;

let finalTotal = total - (total * discount);

console.log(`Discount: ${discount * 100}%`);
console.log(`Final Total: ${finalTotal} RWF`);