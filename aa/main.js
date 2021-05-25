//function sumowaniewyarz() {
//    let input1 = document.getElementById('inpucik1').value
//    let input2 = document.getElementById('inpucik2').value
//    let wysiwietl = input1 + input2
//    if (input1 + input2 === ""){
//        alert("oba divy są puste ")
//    }
//    console.log(wysiwietl)
//}
//
//function sumowaniewyarz1() {//
//  const inputs = document.querySelectorAll('[type="text"]')
//  let input = inputs[0].value
//  input = parseInt.value
//  if(input1 !== NaN){

//  }
//}


function walidacja2() {
    const imie = document.getElementById('imie').value
    if(imie.length < 3){
        alert("za któtkie imię")
    }
}
function walidacja1() {
    const Nazwisko = document.getElementById('Nazwisko').value
    if(Nazwisko.length < 5){
        alert("Nazwisko musi posiadać co najmiej 5 liter")
    }
}
function walidacja3() {
    const imie = document.getElementById('tekst30').value
    if(imie.length < 20){
        alert("Wiadomość musi posiadać co najmiej 20 znaków")
    }
}
function walidacja4(val){
    console.log("komendaa")
    const xd = document.getElementById('E-mail')
    let xd = val.split(" ")
  const isEmail =  xd.some(item => item === "@")
  console.log(isEmail)
}
const isTelefon = xd.some(item => item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') 
        if(isTelefon == true) {
            alert('Numer telefonu musi mieć cyfry i tylko cyfry')
        }
        else {
            console.log("Telefon:", telefon)
            return
        }
function Wybierz(pizza){
    const wybranaPizza = pizza
    console.log(wybranaPizza)
}










function Wybierz(pizza){
    const wybranaPizza = pizza
    console.log(wybranaPizza)
}



function send(){
    let formData = []
    const imie = document.getElementById('imie').value
    const Nazwisko = document.getElementById('Nazwisko').value
    const xd = document.getElementById('E-mail')
    const xd = document.getElementById('Numer')
    const imie = document.getElementById('tekst30').value
    if(formData.length < 3){
        document.getElementById('imie-error').style ='visiity: hidden;'
    }
    if(Nazwisko.length < 5){
        document.getElementById('nazwisko-error').style ='visiity: hidden;'
    } else{
        formData.push(Nazwisko)
        document.getElementById('nazwisko-error').style ='visiity: hidden;'
    }
    if(email.search('@') < -1){

    }
}function xd(){
    const wybor = document.getElementById('wybor')
    console.log(wybor)
}
let food = [
    
]