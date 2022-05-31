// tipado estático

//Tipado por inferencia
//TS también infiere el tipo a partir del valor inicial, pero a diferencia de JS, no permite cambiar luego ese tipo
// let animal = "Giraffe"; //infiere string, number y boolean
// let age = 19;
// let isMammal = true;

//Tipado explícito
let animal: string = "Giraffe";
let age: number = 19;
let isMammal: boolean = true;

//podemos definir una función con sintaxis pura de JS y ver cómo pueden complicarse las cosas...
// const circumference = (diameter) => {
//   return diameter * Math.PI;
// };
// console.log(circumference(30));
// console.log(circumference("treinta"));//NaN

//Agregamos el tipo al parámetro y ya no podré compilar la lín 35
const circumference = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circumference(30));
// console.log(circumference("treinta"));//error de tipo

// tipado por inferencia del arreglo names
const names = ["Marce", "Pato", "Giani"];
names.push("Bond");
// names.push(true) //error
// names[2] = 3 //error

// tipado explícito
const names2: string[] = ["Pedro", "Peter"];

//un arreglo puede contener datos de varios tipos. mixed puede contener strings y numbers, en cualquier orden y cantidad, pero solamente esos dos tipos (Union Type, lo veremos detallado más abajo de forma explícita)
const mixed = ["Pablo", 200];
mixed.push(34);
mixed.push(45, 456, 490, "Robert");
// mixed.push(true)//type error

//con objetos es similar (este ejemplo funciona con inferencia de tipos)
let hero = {
  name: "Wonder Woman",
  age: 134,
  isActive: true,
  powers: ["super speed", "power shield", "lasso of truth"],
};

hero.name = "Super Duper"; //ok
// hero.name = false //type error

//UNION TYPE (strings y/o numbers, no necesariamente ambos deben estar presentes)
const mixedExplicit: (string | number)[] = [23, 450, "string"];

//OBJECT TYPE
let heroB: object;
heroB = {
  name: "Sonoman",
  powers: ["power 1", "power 2"],
}; //ok

// heroB = "Calabaza" //error de tipo (string)
heroB = ["calabaza"]; //OK. Un array es un objeto de tipo array

//ANY TYPE
//poli podrá contener cualquier tipo de valor
let poli: any;
poli = "Juárez";
poli = false;
poli = 456;
poli = {
  name: "Julio",
  age: 345,
};

const mixedPoli: any[] = [];
mixedPoli.push("hologram", false, "Swiss cheese", 56);

//FUNCTION TYPE

// se infiere el tipo function
const sayHello = () => {
  console.log("Holisss");
};

sayHello();

//tipado explícito
let sayGoodbye: Function;
sayGoodbye = (name: string) => {
  console.log("Chauchisss", name);
};
sayGoodbye("Rupert");

//una función con un tercer param opcional (?). Si ese tercer param (que dará undefined en la salida del log de lin 101) tuviera un default value... No podría dejar el ? (algo no puede tener un valor inicial y a la vez ser opcional)
const mixer = (a: number, b: boolean, c?: string) => {
  console.log(a, b, c);
};
mixer(34, false);

//si creamos una var para almacenar el resultado de una función, su tipo será inferido a partir del valor de retorno de dicha función

const restar = (a: number, b: number) => {
  return a - b; //retorna number
};

const resta = restar(17, 13); //por lo tanto, resta será de tipo number, por inferencia de tipos

//el valor de retorno también se puede establecer de forma explícita
const sumar = (a: number, b: number): number => {
  return a + b; //retorna number
};

//Las funciones que no contienen return, retornan void. Eso también puede declararse explícitamente
const mixerExplicit = (a: number, b: boolean, c?: string): void => {
  console.log(a, b, c);
};

//TYPE ALIASES (ALIAS DE TIPO)
//LA DEFINICIÓN DE TIUPOS DE PARAMS DE UNA FUNCIÓN PUEDE SER MUY LARGA...
const product = (item: {
  id: string | number;
  detail: string;
  inStock: boolean;
  price: number;
}) => {
  console.log(
    `El id de ${item.detail} es ${item.id}, su precio unitario es $${
      item.price
    } y ${item.inStock ? "está" : "no está"} en stock'`
  );
};

const item = {
  id: "23ijdk878",
  detail: "Un producto hermoso y muuuuy caro",
  inStock: false,
  price: 22232333,
};

product(item);

//si esta estructura (function params) se repitiera, e incluso podría ser más larga, convendría crear un alias de tipo
type id = string | number;
const product2 = (item: {
  id: id;
  detail: string;
  inStock: boolean;
  price: number;
}) => {
  console.log(
    `El id de ${item.detail} es ${item.id}, su precio unitario es $${
      item.price
    } y ${item.inStock ? "está" : "no está"} en stock'`
  );
};

//Podemos crear alias de tipo más complejos
type uid = string | number;
type objectWithDetail = { detail: string; id: uid };
const logProduct = (item: objectWithDetail) => {
  console.log(item);
};

const product3 = {
  detail: "Botas de alta montaña",
  id: 23334433,
};

logProduct(product3);

//FUNCTION SIGNATURE
//esta es la firma de la función (aunque hasta aquí, no es otra cosa que una variable... aunque el return nos indica que es una función)
let saludar: (a: string, b: string) => void;

saludar = (name: string, saludo: string): void => {
  console.log(saludo, name);
};

saludar("Charly", "Buenas noches");
//function signature
let sumaResta: (a: number, b: number, c: string) => number;

sumaResta = (num1: number, num2: number, operation: string = "suma") => {
  if (operation === "suma") return num1 + num2;
  else if (operation === "resta") return num1 - num2;
  return 0;
};

//function signature
let rating: (obj: { name: string; stars: number }) => void;

rating = (hotel: { name: string; stars: number }): void => {
  console.log(`${hotel.name} has a ${hotel.stars} stars rating`);
};

rating({ name: "tal cosa", stars: 4 });
