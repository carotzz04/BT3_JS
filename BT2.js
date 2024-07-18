let arr = [1,2,3,4,5];
let sum = 0;

for (let i of arr) {
    sum += i;
}

let avg = sum/5;

console.log("Tong cac phan tu trong mang:", sum);
console.log("Trung binh cac phan tu trong mang:", avg);
