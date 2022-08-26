const numbers = [12, 3, 34, 25, 32, 9, 5, 3, 2];
const bigNumbers = numbers.filter(number => number > 20); // যেসকল number ২০ এর থেকে বড় তাদের দেখাও.
const smallNumber = numbers.filter(n => n < 10); // যেসকল number ১০ এর থেকে ছোট  তাদের দেখাও 
const even = numbers.filter(e => e % 2 === 0); // Nmber এর থেকে জোড় সংখ্যাগুলো দেখাও 
const odd = numbers.filter(o => o % 2 === 1); // Number এর থেকে বিজোড় সংখ্যাগুলো দেখাও 

// Array
const products = [
    {id: 1, name: 'laptop',price: 50020},
    {id: 2, name: 'mobile',price: 5050},
    {id: 3, name: 'watch',price: 5000},
    {id: 4, name: 'tablet',price: 50010},
    {id: 5, name: 'iphone',price: 550050}
];
const expensive = products.filter(product => product.price > 100000); // ১ লাখ টাকার উপরে যেগুলো আছে দেও ?
const lesvalue = products.filter(item => item.price < 6000);
//console.log(lesvalue);
// console.log(expensive);

//console.log(odd);
//console.log(even);
//console.log(smallNumber); 
//console.log(bigNumbers);