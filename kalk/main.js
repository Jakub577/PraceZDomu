
var owoce = ['Jabłko', 'Banan','borzkwinia'];
owoce.push('Mango');
// ["Truskawka", "Banan", "Mango"]

var pos = owoce.indexOf('Banan');
var usunElement = owoce.splice(pos, 1);
console.log(owoce)