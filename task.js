// Import Readline Module from Node
const readline = require("readline");

//Create the interface for input and output 
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(theQuestion) {

return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))

}

async function enterProducts(){
    let buyingData = {}
    let enterDetails = true
    while(enterDetails){
        let details = await question("Press A to add product and Q to quit \n")
        if(details === "A"){
            let product = await question("Enter product: ")
            let quantity = await int(question("Enter quantity: "))
            buyingData.update({product: quantity})
        }
        else if(details === "Q"){
            enterDetails = false
        }
        else{
            console.log("Please select a correct option")
        }
    }
     return buyingData
}

function getPrice(product, quantity){
    const priceData = {
        'Biscuit':3,
        'Chicken': 4,
        'Egg': 1,
        'Coke':2,
        'Bread': 2,
        'Apple':3,
        'Onion':3
    }
    let subtotal = priceData[product]* quantity
    console.log(product + '$' + structuredClone(priceData[product])+ 'x' + structuredClone(quantity) + '='+ str(subtotal))
    return subtotal
}


function getDiscount(billAmount, membership){
    let discount =0
// Else statemetents
if (billAmount >=25)
    if(membership === 'Gold'){
         billAmount = billAmount * 0.80
          console.log(str(discount) + '% off for' + membership + '' + 'membership on total amount:$' + str(billAmount))
    }
    else if (membership === 'Silver'){
          discount = 20
        billAmount =billAmount * 0.90
         console.log(str(discount) + '% off for' + membership + '' + 'membership on total amount:$' + str(billAmount))
    }
else  {
    console.log("No discount on amount less than $25")
}
}

function makebill(buyingData, membership){
    let billAmount = 0
    for( value in buyingData.items()){
        billAmount += getPrice(key, values)
        billAmount = getDiscount(billAmount, membership)
        console.log("The discount amount is $" + str(billAmount))
    }
}
let mbuyingData = enterProducts()
let async membership = await question("Entercustomer membership: ")
makebill(buyingData, membership)
















