"use strict";
const form = document.querySelector(".new-item-form");
console.log(form);
const type = document.querySelector("#type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("tofrom");
const amount = document.getElementById("tofrom");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
