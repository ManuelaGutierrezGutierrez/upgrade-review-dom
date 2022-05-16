// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ulList = document.createElement("ul");

countries.forEach(function (item) {
	let liList = ulList.appendChild(document.createElement("li"));
	liList.innerHTML = item;
});

console.log(ulList);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removeWord = document.querySelectorAll(".fn-remove-me");
console.log(removeWord);
removeWord.forEach(function (element) {
	document.body.removeChild(element);
});

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let divCars = document.querySelector('div[data-function="printHere"]');
let ulCars = document.createElement("ul");

cars.forEach(function (element) {
	let liCars = ulCars.appendChild(document.createElement("li"));

	liCars.innerHTML = element;
});

divCars.appendChild(ulCars);
console.log(divCars);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesB = [
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let item of countriesB) {
	let divList = document.createElement("div");
	divList.className = "divPhoto";
	let h4 = divList.appendChild(document.createElement("h4"));
	h4.innerHTML = item.title;
	let img = divList.appendChild(document.createElement("img"));
	img.src = item.imgUrl;
	document.body.appendChild(divList);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
let buttonRemove = document.createElement("button");
buttonRemove.innerHTML = "Elimina el último";
let last = document.body.lastChild;
buttonRemove.onclick = function () {
	document.body.removeChild(last);
};

document.body.appendChild(buttonRemove);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

let divPhotoRemove = document.querySelectorAll(".divPhoto");
console.log(divPhotoRemove);

for (let i = 0; i < divPhotoRemove.length; i++) {
	let btn = document.createElement("button");
	btn.innerHTML = "Elimina este item";
	btn.onclick = function () {
		divPhotoRemove[i].parentElement.removeChild(divPhotoRemove[i]);
	};
	divPhotoRemove[i].appendChild(btn);
}
