function formularzImie() {
    const imie = document.getElementById('imie').value
    if(imie.length < 3){
        alert("To pole musi zawierać co najmiej 3 litery")
    }
}

function FormularzNazwisko() {
    const nazwisko = document.getElementById('nazwisko').value
    if(nazwisko.length < 5){
        alert("To pole musi zawierać co najmiej 5 liter")
    }
}

function wysłanie() {
    alert('Zamówienie zostało wysłane. Czas oczekiwania to około 28min')
    console.log(alert)
}

function Wybierz(pizza){
    const wybranaPizza = pizza
    console.log(wybranaPizza)
}