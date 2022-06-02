// // // tipado estático

// // //Tipado por inferencia
// // //TS también infiere el tipo a partir del valor inicial, pero a diferencia de JS, no permite cambiar luego ese tipo
// // // let animal = "Giraffe"; //infiere string, number y boolean
// // // let age = 19;
// // // let isMammal = true;

// // //Tipado explícito
// // let animal: string = "Giraffe";
// // let age: number = 19;
// // let isMammal: boolean = true;

// // //podemos definir una función con sintaxis pura de JS y ver cómo pueden complicarse las cosas...
// // // const circumference = (diameter) => {
// // //   return diameter * Math.PI;
// // // };
// // // console.log(circumference(30));
// // // console.log(circumference("treinta"));//NaN

// // //Agregamos el tipo al parámetro y ya no podré compilar la lín 35
// // const circumference = (diameter: number) => {
// //   return diameter * Math.PI;
// // };
// // console.log(circumference(30));
// // // console.log(circumference("treinta"));//error de tipo

// // // tipado por inferencia del arreglo names
// // const names = ["Marce", "Pato", "Giani"];
// // names.push("Bond");
// // // names.push(true) //error
// // // names[2] = 3 //error

// // // tipado explícito
// // const names2: string[] = ["Pedro", "Peter"];

// // //un arreglo puede contener datos de varios tipos. mixed puede contener strings y numbers, en cualquier orden y cantidad, pero solamente esos dos tipos (Union Type, lo veremos detallado más abajo de forma explícita)
// // const mixed = ["Pablo", 200];
// // mixed.push(34);
// // mixed.push(45, 456, 490, "Robert");
// // // mixed.push(true)//type error

// // //con objetos es similar (este ejemplo funciona con inferencia de tipos)
// // let hero = {
// //   name: "Wonder Woman",
// //   age: 134,
// //   isActive: true,
// //   powers: ["super speed", "power shield", "lasso of truth"],
// // };

// // hero.name = "Super Duper"; //ok
// // // hero.name = false //type error

// // //UNION TYPE (strings y/o numbers, no necesariamente ambos deben estar presentes)
// // const mixedExplicit: (string | number)[] = [23, 450, "string"];

// // //OBJECT TYPE
// // let heroB: object;
// // heroB = {
// //   name: "Sonoman",
// //   powers: ["power 1", "power 2"],
// // }; //ok

// // // heroB = "Calabaza" //error de tipo (string)
// // heroB = ["calabaza"]; //OK. Un array es un objeto de tipo array

// // //ANY TYPE
// // //poli podrá contener cualquier tipo de valor
// // let poli: any;
// // poli = "Juárez";
// // poli = false;
// // poli = 456;
// // poli = {
// //   name: "Julio",
// //   age: 345,
// // };

// // const mixedPoli: any[] = [];
// // mixedPoli.push("hologram", false, "Swiss cheese", 56);

// // //FUNCTION TYPE

// // // se infiere el tipo function
// // const sayHello = () => {
// //   console.log("Holisss");
// // };

// // sayHello();

// // //tipado explícito
// // let sayGoodbye: Function;
// // sayGoodbye = (name: string) => {
// //   console.log("Chauchisss", name);
// // };
// // sayGoodbye("Rupert");

// // //una función con un tercer param opcional (?). Si ese tercer param (que dará undefined en la salida del log de lin 101) tuviera un default value... No podría dejar el ? (algo no puede tener un valor inicial y a la vez ser opcional)
// // const mixer = (a: number, b: boolean, c?: string) => {
// //   console.log(a, b, c);
// // };
// // mixer(34, false);

// // //si creamos una var para almacenar el resultado de una función, su tipo será inferido a partir del valor de retorno de dicha función

// // const restar = (a: number, b: number) => {
// //   return a - b; //retorna number
// // };

// // const resta = restar(17, 13); //por lo tanto, resta será de tipo number, por inferencia de tipos

// // //el valor de retorno también se puede establecer de forma explícita
// // const sumar = (a: number, b: number): number => {
// //   return a + b; //retorna number
// // };

// // //Las funciones que no contienen return, retornan void. Eso también puede declararse explícitamente
// // const mixerExplicit = (a: number, b: boolean, c?: string): void => {
// //   console.log(a, b, c);
// // };

// // //TYPE ALIASES (ALIAS DE TIPO)
// // //LA DEFINICIÓN DE TIUPOS DE PARAMS DE UNA FUNCIÓN PUEDE SER MUY LARGA...
// // const product = (item: {
// //   id: string | number;
// //   detail: string;
// //   inStock: boolean;
// //   price: number;
// // }) => {
// //   console.log(
// //     `El id de ${item.detail} es ${item.id}, su precio unitario es $${
// //       item.price
// //     } y ${item.inStock ? "está" : "no está"} en stock'`
// //   );
// // };

// // const item = {
// //   id: "23ijdk878",
// //   detail: "Un producto hermoso y muuuuy caro",
// //   inStock: false,
// //   price: 22232333,
// // };

// // product(item);

// // //si esta estructura (function params) se repitiera, e incluso podría ser más larga, convendría crear un alias de tipo
// // type id = string | number;
// // const product2 = (item: {
// //   id: id;
// //   detail: string;
// //   inStock: boolean;
// //   price: number;
// // }) => {
// //   console.log(
// //     `El id de ${item.detail} es ${item.id}, su precio unitario es $${
// //       item.price
// //     } y ${item.inStock ? "está" : "no está"} en stock'`
// //   );
// // };

// // //Podemos crear alias de tipo más complejos
// // type uid = string | number;
// // type objectWithDetail = { detail: string; id: uid };
// // const logProduct = (item: objectWithDetail) => {
// //   console.log(item);
// // };

// // const product3 = {
// //   detail: "Botas de alta montaña",
// //   id: 23334433,
// // };

// // logProduct(product3);

// // //FUNCTION SIGNATURE
// // //esta es la firma de la función (aunque hasta aquí, no es otra cosa que una variable... aunque el return nos indica que es una función)
// // let saludar: (a: string, b: string) => void;

// // saludar = (name: string, saludo: string): void => {
// //   console.log(saludo, name);
// // };

// // saludar("Charly", "Buenas noches");
// // //function signature
// // let sumaResta: (a: number, b: number, c: string) => number;

// // sumaResta = (num1: number, num2: number, operation: string = "suma") => {
// //   if (operation === "suma") return num1 + num2;
// //   else if (operation === "resta") return num1 - num2;
// //   return 0;
// // };

// // //function signature
// // let rating: (obj: { name: string; stars: number }) => void;

// // rating = (hotel: { name: string; stars: number }): void => {
// //   console.log(`${hotel.name} has a ${hotel.stars} stars rating`);
// // };

// // rating({ name: "Hotel Transilvania", stars: 4 });

// // //DOM - TYPE CASTING
// // //El elemento link podría ser HTMLAnchorElement o null, si aún no existiese en el DOM (nuestro caso). Por eso, en la línea 204 tendremos una advertencia al tratar de acceder a una propiedad de un elemento que aún no está en el DOM. Podemos resolverlo agregando un signo de admiración ! en la línea 202.
// // const link = document.querySelector("a")!;
// // console.log(link);
// // console.log(link.href);

// // const form1 = document.querySelector(".sales-contact");
// // //Al hacer hover sobre form veremos que puede ser un Element o null. Esto es así xq estamos seleccionando una clae (.sales-contact) y esta podría ser usada en un elemento cualquiera, sea un formulario, un heading, un párrafo...etc. Para resolver eso podemos hacer una proyección de tipo (type casting)

// // const form2 = document.querySelector(".sales-contact") as HTMLFormElement;

// // //CLASES (el modificador de acceso public no es requerido, pues es el comportamiento por default, es decir, podemos acceder a cualquier instancia de la clase y modificar sus props, como vemos en la lin 231)
// // class Invoice {
// //   private client: string;
// //   public detail: string;
// //   readonly amount: number;
// //   constructor(c: string, d: string, a: number) {
// //     this.client = c;
// //     this.detail = d;
// //     this.amount = a;
// //   }
// //   format() {
// //     return `${this.client} debe $${this.amount} por ${this.detail}`;
// //   }
// // }

// // //instanciamos un objeto de la clase Invoice

// // const inv01 = new Invoice("Pedro", "Reparación de teléfono", 5000);
// // const inv02 = new Invoice("Amanda", "Afinación de saxofón", 5000);
// // inv02.detail = "Afinación de saxofón y docena de empanadas";

// // const inv03 = {
// //   name: "Rupert",
// //   detail: "Pintura de muro exterior",
// //   amount: 45000,
// // };

// // //podemos crear uyn array que acepte solamente objetos de la clase Invoice
// // let invoices: Invoice[] = [];
// // //invoices.push(inv03) //no puedo porque no es una instancia de la clase Invoice

// // invoices.push(inv02); //esto sí está OK

// // //Métodos públicos, privados y readonly
// // //inv01.client //como agregamos a la clase Invoice, un modificador de acceso de tipo private en la prop client, no podremos acceder a dicha prop fuera de la clase

// // //inv01.amount = 777 //Esto no compilará porque amount tienen el access modifier readonly

// // //Una forma más acotada de escribir una clase... Directamente en el constructor
// // class InvoiceShort {
// //   constructor(
// //     private client: string,
// //     public detail: string,
// //     readonly amount: number
// //   ) {}
// //   format() {
// //     return `${this.client} debe $${this.amount} por ${this.detail}`;
// //   }
// // }

// // const inv04 = new InvoiceShort("Pedro", "Reparación de teléfono", 5000);

// // //INTERFACES
// interface isHero {
//   name: string;
//   age: number;
//   isActive: Boolean; //check lowercase
//   powers: string[];
//   catchPhrase(a: string): void;
// }

// const batman: isHero = {
//   name: "Bruce Wayne",
//   age: 50,
//   isActive: true,
//   powers: ["High intellect", "fighting skills", "wealth"],
//   catchPhrase(text: string) {
//     console.log(`${this.name} says: "${text}"`);
//   },
// };

// batman.catchPhrase("Me gusta la tortilla española... yummy");
// //aquí creamos una variable y le asignamos la interfaz, por lo tanto, cada objeto que creemos con esa variable, también tendrá que observar las reglas de la interfaz (las reglas, es decir, la forma, pero la función del objeto puede ser distinta en cada caso, respetando la firma, o sea, el nombre, los argumentos y el tipo de estos)
// // let anyHero: isHero;
// // const robin = {
// //   name: "Ricardo Tapia",
// //   age: 18,
// //   isActive: true,
// //   powers: ["High intellect", "fighting skills", "Acrobatics"],
// //   catchPhrase(text: string) {
// //     console.log(`${this.name} says: "${text}"`);
// //   },
// // };

// // const inspectHero = (a: isHero) => {
// //   a.catchPhrase("Recórcholis");
// // };
// // inspectHero(robin);

// // //INTERFACES CON CLASES

// //GENERICS
// //Los generics o tipos genéricos nos ayudan a crear bloques de código que pueden ser reutilizados por distintos tipos.
// //Explicamos con un ej: una func que recibe un objeto cualquiera, sin importar la forma, ergo, las props, y retorna ese mismo objeto más un id único

// const addUID = <T extends { name: string }>(obj: T) => {
//   const uid: number = Math.round(Math.random() * 100000);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "Margarita", email: "mail@marga.com" });
// console.log(addUID(docOne));
// //GENERICS WITH INTERFACES
// //recordemos que una interfaz solamente define la forma de un objeto, sus props, métodos... su firma

// interface Resource {
//   uid: number;
//   resourceName: string;
//   data: object;
// }

// const doc05: Resource = {
//   uid: 1,
//   resourceName: "users",
//   data: { name: "Leandro Montoto" },
// };
// //Con el ejemplo anterior, imaginemos que definimos una interfaz y deseamos cierta flexibilidad, en este caso, que data pueda ser un objeto o un string. Para esto vamos a utilizar tipos genéricos en interfaz

// interface ResourceFlex<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// //Ejemplo con un string
// const doc06: ResourceFlex<string> = {
//   uid: 23,
//   resourceName: "users",
//   data: "Leandro Montoto Jr",
// };
// //Ejemplo con un objeto
// const doc07: ResourceFlex<object> = {
//   uid: 23,
//   resourceName: "users",
//   data: { name: "Leandro Montoto Jr" },
// };

// //un arreglo de strings
// const doc08: ResourceFlex<string[]> = {
//   uid: 23,
//   resourceName: "users",
//   data: ["Marga123", "PepitoPomodoro"],
// };

// //ENUMS
// //ES UNA CLASE ESPECIAL DE TS QUE PERMITE GUARDAR UN JUEGO DE CONSTANTES O PALABRAS CLAVES Y ASOCIARLAS A UN VALOR NUMÉRICO.

// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
// }
// //CADA UNA DE ESTAS PALABRAS CLAVES O KEYWORDS ESTÁ ASOCIADA A UN ÍNDICE

// interface Resource2<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const doc10: Resource2<object> = {
//   uid: 4,
//   resourceType: ResourceType.BOOK,
//   data: { title: "In Cold Blood" },
// };

// const doc11: Resource2<object> = {
//   uid: 4,
//   resourceType: ResourceType.AUTHOR,
//   data: { name: "Truman Capote" },
// };

// console.table(doc10); //aquí podemos ver el index
// console.table(doc11);

//TUPLE (TUPLA)
//Las tuplas nos permiten secuenciar valores (agruparlos). Se define con corchetes, al igual que un arreglo y también acepta los métodos de los arreglos. La característica distintiva es que una vez que el tipo de dato es definido, no puede cambiar el tipo de dato para esa posición.***

//DEFINIMOS UN ARRAY
const arreglo = [150, false, "palabra"]; //number, boolean, string

//Podemos cambiar estos valores, sin importar el tipo ni la posición en el arreglo. Esto es porque cuando inicializamos el arreglo, por inferencia de tipos, TS dejó establecido que nuestro arreglo puede contener datos de los tipos string, boolean y number, pero no importa la posición, la cantidad y no necesariamente tienen que estar presentes todos estos tipos
arreglo[0] = false;
arreglo[1] = "Say something";
arreglo[2] = 234;
arreglo.pop();
arreglo.push(false, false, true, "string", false);

//***
const tupla: [number, boolean, string] = [1450, true, "algo"];
//definimos la tupla e indicamos que en la primera posición debe ir un number, en la segunda un booleano y en la tercera un string. Estoy definiendo taxativamente y de forma obligatoria el tipo de dato para cada index.
tupla[2] = "Juana"; //ok
//tupla[2] = false //Not ok
//tupla.push("mortadela", 2333, 22333, false); //esto se puede, la tupla pide que en los indexes 0, 1 y 2 haya determinados tipos, pero nada prescribe sobre los demás elementos que pudiera contener.

tupla[0] = 3;
console.log(tupla);
tupla.pop();
console.log(tupla);
tupla.pop();
console.log(tupla);
tupla.pop();
console.log(tupla);

const mifunc = (a: string, b: number) => {};
