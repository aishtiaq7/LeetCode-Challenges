let arr = [
  { id: 1, age: 12, name: "Manu" },
  { id: 2, age: 24, name: "Quincy" },
  { id: 3, age: 22, name: "Abbey" },
];
console.clear();

let tooYoung = arr.filter((el, index) => {
  console.log(`el:${el.name}, index:${index}`)
  return el.age <= 14;
  
});
console.log(tooYoung);
