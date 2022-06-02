const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("tofrom") as HTMLInputElement;
const amount = document.getElementById("tofrom") as HTMLInputElement;
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
