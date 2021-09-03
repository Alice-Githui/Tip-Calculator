const totalBill=document.getElementById("total-bill");
const tipPercent=document.querySelectorAll('.tips');
const numOfPeople=document.getElementById("num-of-people");
let amountPerPerson=document.getElementById("amount-per-person");
let totalPerPerson=document.getElementById("total-per-person")
let reset=document.getElementById("reset-button")

let bill=parseInt(totalBill.value);
let tip=parseInt(tipPercent.value);
let number=parseInt(numOfPeople.value);

console.log(tipPercent)
function getTotalCost(){

    totalPerPerson.innerHTML= "$" +(((1+tip)*bill)/number).toFixed(2)
    amountPerPerson.innerHTML= "$" + ((tip * bill)/number).toFixed(2)
}

totalBill.addEventListener("change", function(event){
    event.preventDefault()

    bill=parseInt(event.target.value)
    // bill.toFixed(2)
    console.log(bill)

    getTotalCost()
})

function getTip(e){

    tip=parseInt(e.value)
    tip=tip/100
    console.log(tip)

    getTotalCost()
}

numOfPeople.addEventListener("change", function(event){
    event.preventDefault()

    number=parseInt(event.target.value)
    console.log(number)

    getTotalCost()
})

function resetApp(){
    document.getElementById("total-bill").value=0;
    document.querySelectorAll('.tips').value=0;
    document.getElementById("num-of-people").value=0;       
    totalPerPerson.innerHTML="$0";
    amountPerPerson.innerHTML="$0"
}