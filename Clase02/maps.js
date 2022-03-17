/* MAP (ES6):
Es un objeto que almacena pares clave-valor. Podemos usar objetos o valores primitivos.
Objetos y Maps son similares en cuanto a funcionamiento (pares clave-valor).
-Las claves de un objeto son Strings o Symbols; las de un Map pueden ser de cualquier tipo
-Para saber el tamaño de un Map usamos la propiedad size. En objetos, hay que recorrerlo manualmente.
-El Map es iterable, podemos usar métodos. Para iterar objeto primero necesitamos las claves y luego iterar
sobre ellas.
*/

let objetoMap = new Map([
    [1, "Roberto"],
    [2, "Julieta"],
    [3, "Scooby Doo"]
]);
console.log(objetoMap)

//PROPIEDADES
//size: tamaño del map
console.log(`Tamaño del map: ${objetoMap.size}`) //va sin paréntesis es propiedad, no es método


//MÉTODOS
//get: devuelve el valor asociado a una clave o undefined
console.log(objetoMap.get(2)) //Julieta
console.log(objetoMap.get(5)) //undefined

//set: establece un valor asociado a una clave, si la clave ya existe... actualiza
objetoMap.set(4, "Cecilia");
console.log(objetoMap.get(4)) //Cecilia
objetoMap.set(1, "Manuela");
console.log(objetoMap.get(1)) //Manuela

//has: comprueba si el map contiene un element indicado por su clave
console.log(objetoMap.has(3)) //retornará true
console.log(objetoMap.has(9)) //retornará false

//delete: borra un elemento según la clave que le pasamos
// objetoMap.delete(2)
console.log(objetoMap)

//clear: borra todos los elementos del map
// objetoMap.clear()
console.log(objetoMap)


//ITERADORES
//keys: devuelve un interador con las claves
//values: devuelve un iterador con los valores
//entries: devuelve un iterador con los pares clave/valor

const iteratorKeys = objetoMap.keys()
console.log(iteratorKeys)

const iteratorValues = objetoMap.values()
console.log(iteratorValues)


const iteratorEntries = objetoMap.entries()
console.log(iteratorEntries) //valor recién inicializado
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().done); //true porque iteró todos los entries