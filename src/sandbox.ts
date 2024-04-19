

class Invoice {

  constructor( 
      readonly client: string,
      public details: string,
      public amount: number 

    ){
      this.client = client;
    };

  format():string {
    return  `This invoice is for: ${this.client} representing ${this.details} with cost of ${this.amount} dolars`;
  }

}

let firstInvoice  = new Invoice("janel", "Web Services", 100);
console.log(firstInvoice.format());

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let secondInvoice  = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  console.log(secondInvoice.format());
  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  
    
  );

  

  //console.log(details.value);
 // console.log(amount.value);

});