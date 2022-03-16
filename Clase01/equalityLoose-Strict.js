//Loose vs Strict Equality
const num1 = 10
const num2 = '10'
num1 == num2 //retorna true (esto se llama loose equality)
num1 === num2 //retorna false (esto se llama strict equality)
console.log(typeof num1, typeof num2)

//---------------------------------//