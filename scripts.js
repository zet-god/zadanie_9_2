//alert('hello');

var femaleNames = ['Ania', 'Ola', 'Kasia', 'Basia', 'Asia'];
var maleNames = ['Maciej', 'Andrzej', 'Praweł', 'Wiesław', 'Jarosław'];

var allTheNames = femaleNames.concat(maleNames);

console.log(allTheNames);

var additionalName = 'Agnieszka';

if (allTheNames.indexOf(additionalName) >= 0) {
	console.log('Imię już się pojawiło');
}
else {
	allTheNames.splice(3, 0, additionalName);
}

console.log(allTheNames);