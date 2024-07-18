let student = {name: 'Rock Lee', age: 20, avgScore: 9};

console.log('------ Thong tin hoc sinh ------');
for (let key in student) {
    console.log(key + ':' + student[key]);
}