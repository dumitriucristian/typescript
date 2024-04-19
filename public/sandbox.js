"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
    }
    ;
    format() {
        return `This invoice is for: ${this.client} representing ${this.details} with cost of ${this.amount} dolars`;
    }
}
let firstInvoice = new Invoice("janel", "Web Services", 100);
console.log(firstInvoice.format());
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let secondInvoice = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    console.log(secondInvoice.format());
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    //console.log(details.value);
    // console.log(amount.value);
});
