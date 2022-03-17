// Es un objeto que permite almacenar valores únicos de cualquier tipo.
// Para considerar los valores iguales debe cumplirse la igualdad estricta, con
// excepción de cero positivo y negativo y NaN positivo y negativo (ambos se consideran iguales)

// Method	        Description
// ---------------------------------
// new Set()	    Creates a new Set
// add()	        Adds a new element to the Set
// delete()	        Removes an element from a Set
// has()       	    Returns true if a value exists
// clear()	        Removes all elements from a Set
// forEach()	    Invokes a callback for each element
// values()	        Returns an Iterator with all the values in a Set
// keys()	        Same as values()
// entries()	    Returns an Iterator with the [value,value] pairs from a Set

const ciudades = new Set([
    "Ámsterdam",
    "Vancouver",
    "Brujas",
    "Vancouver",
    "Tandil",
    "Brujas",
    "Madrid",
    "Vancouver",
])

console.log(ciudades)
const numbers = new Set();
numbers.add(23)
numbers.add(3)
numbers.add(-9)

console.log(ciudades.size)

console.log(`Ciudad está registrada ${ciudades.has("Tandil")}`)

console.log(numbers.delete(3))
console.log(numbers.delete(300))
numbers.add(-20)
console.log(numbers)

//objetos iguales... no tan iguales
const pandorasBox = new Set([
    "horse", 34, "Adndrómeda"
])
pandorasBox.add({ 11: "Buenos Aires", 249: "Tandil" })
console.log(pandorasBox)
const areaCodes = { 11: "Buenos Aires", 249: "Tandil" }
console.log(pandorasBox.size)
pandorasBox.add(areaCodes);
console.log(pandorasBox.size)
console.log(pandorasBox)

pandorasBox.clear()
console.log(pandorasBox)