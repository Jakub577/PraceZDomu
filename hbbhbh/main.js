let firstName = "Kuba"
let age = 15
const surName = "Kowalski"
const isHealthy = true 
const country = "Germany"
const favoriteColor = "blue"
let isBoy = true
console.log()

const price = 30
const tax = 4
const other = 2
const action = other * price + tax 

function actionPricedTaxAndOther (cena , podatek , inne) {
    return inne * cena + podatek
}
const koncowaCena = actionPricedTaxAndOther(10 , 40 , 2)
console.log(koncowaCena)

function actionPricedTaxAndOther (par1, par2, par3){
    if(par3 === 0 || par1 + par2  === 0){
      par1 = 1
      par2 = 2 
      par3 = 3
      console.log("błąd")
     return(par1 + par2) / par3
   } else{
       return (par1 + par2) / par3
    }
}

let wynik = actionPricedTaxAndOther(0,0,0)
console.log(wynik)
const nazwa1 = "umpa"
const nazwaa = "lumpa"
const costam = nazwa1 + nazwaa
console.log(costam)

function useTrim(ar1, ar2, ar3) {
    if (ar1 !== '' || ar2 !== '' || ar3 !== '') {
      return ar1.trim() + ' ' + ar2.trim() + ' ' + ar3.trim()
    } else {
      return "jeden bądzi więcej argumentów jest pustym stringieme"
    }
  
  }
  
  const napis3 = useTrim("          Jan", "         Kowalski     ", "          lat 50       ")
  
  console.log(napis3)