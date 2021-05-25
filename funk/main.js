const liczby = [55,70,50,60,99,100,120,258,600]

    const liczy101Do580 = liczby.filter(item => {
        if(item >= 101 && item < 580) {
            return item
        }
    })

console.log(liczy101Do580)


const tickets = [
  {
      name: "Jan",
      isDog: false
  },
  {
      name: "Andrzej",
      isDog: true
  },
  {
      name: "Adam",
      isDog: false
  },
  {
      name: "Karolina",
      isDog: true
  }
]
const onlyIs = tickets.filter (item => {
  if(item.isDog === false){
    return item
  }
})
console.log(onlyIs)

//const num = [54,81,50,28,99,33,66,72]

//const LiczbyPodzielnePrzez3 = num.filter (item => {
//if(item % 3 i === 0) {
//  return item 
//)
//})
//console.log(LiczbyPodzielnePrzez3)

const num = [54,81,50,28,99,33,66,72]

    const podzielnePrzez3 = num.filter(item => {
        if(item % 3 && item < 60) {
            return 
        } else {
            return item
        }
    })    
    console.log(podzielnePrzez3)

    const number = [5,55, 40]

   const nazwa = number.map(item => item *2 )

   const people = [
    {
        name: "Jan",
        age: 30,
        vaccine: false
    },
    {
        name: "Karol",
        age: 50,
        vaccine: false
    },
    {
        name: "Anna",
        age: 60,
        vaccine: false
    },
    {
        name: "Magda",
        age: 70,
        vaccine: false
    }
]
const wiek = people.map (item => {
  if(item.age > 50){
     item.vaccine = true
      return item 
  }
})
console.log(wiek)

const num3 = [54,81,50,28,99,33,66,72]

//const liczyWiksze = num3.filter(item => {
//  if(item > 50) {
//    return item.map(item => item/3)
    
///  }
//})
//console.log(liczyWiksze)

const wiekszeod50ipodzielicprzez2 = num3.filter(item => {

  if(item > 50 && item % 2 === 0) {

      return item

  }

}).map(item => item / 2)

console.log(wiekszeod50ipodzielicprzez2)

const peoples = [
  {
      name: "Jan",
      age: 30,
      sName: "Kowalski"
  },
  {
      name: "Karol",
      age: 50,
      sName: "Nowak"
  },
  {
      name: "Anna",
      age: 60,
      sName: "Duda"
  },
  {
      name: "Magda",
      age: 70,
      sName: "Tusk"
  }
]
//function Nazwy(){
//  const paragraf = document.createElement("p");
//  document.body.appendChild(paragraf);
 // paragraf.innerText =  item.name +' ' + item.age + ' ' + item.sName
//  
//}

function dodawanieparaga(){

  for (step = 0; step < 5; step++) {
    const paragraf = document.createElement("p");
     paragraf.setAttribute('class' , 'pargraf1')
    document.body.appendChild(paragraf);
    paragraf.innerText = "jestem pagrafraf " 
  }
}
//peoples.forEach(item => {
//  const paragraf = document.createElement("p");
//   paragraf.setAttribute('class' , 'pargraf1') 
 //  paragraf.innerText = item.name +' ' + item.age + ' ' + item.sName
//   app.appendChild(paragraf)
//})