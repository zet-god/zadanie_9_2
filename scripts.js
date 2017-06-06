//alert('hello');

var femaleNames = ['Ania', 'Ola', 'Kasia', 'Basia', 'Asia'];
var maleNames = ['Maciej', 'Andrzej', 'Praweł', 'Wiesław', 'Jarosław'];

var allTheNames = femaleNames.concat(maleNames);


if (allTheNames.indexOf('Agnieszka') >= 0) {
	console.log('Imię już się pojawiło');
}
else {
	allTheNames.splice(3, 0, 'Agnieszka');
}