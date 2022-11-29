
if (typeof (document.getElementById("lang-en")) != 'undefined' && document.getElementById("lang-en") != null) {
	document.getElementById("lang-en").onclick = function() {
		toEng()
	};
}

if (typeof (document.getElementById("lang-be")) != 'undefined' && document.getElementById("lang-be") != null) {
	document.getElementById("lang-be").onclick = function() {
		toBel()
	};
}

if (typeof (document.getElementById("find")) != 'undefined' && document.getElementById("find") != null) {
	document.getElementById("find").onclick = function() {
		find()
	};
}

loader();

function loader() {
	loadIfExists("kupala");
	loadIfExists("kolas");
	loadIfExists("bagdanovich");
	loadIfExists("karatkevich");
	loadIfExists("gilevich");
	loadIfExists("also");
	loadIfExists("day");
	loadIfExists("intro");
	loadIfExists("license");
	loadIfExists("list");
	loadIfExists("more");
	loadIfExists("support");
	loadIfExists("title");
	loadIfExists("workers");
	loadIfExists("langs");
	loadIfExists("quantity");
	loadIfExists("search");
	loadIfExists("find");
}

function toEng() {
	if (typeof (Storage) !== "undefined") {
		localStorage.setItem("also", "See also");
		localStorage.setItem("day", "Person of the day");
		localStorage.setItem("intro", "Welcome, visitor (please join us) to this internet portal where you can find information about some Belarusian writers. Read and learn new things!");
		localStorage.setItem("license", "Community materials are available under the terms of the CC-BY-SA license, unless otherwise specified.");
		localStorage.setItem("list", "List of people");
		localStorage.setItem("more", "Read more");
		localStorage.setItem("support", "For technical support, please contact the BSUIR FCSaN ITS frontenders team.");
		localStorage.setItem("title", "Main Page");
		localStorage.setItem("workers", "Dungeon Masters");

		localStorage.setItem("langs", "Choose a language");
		localStorage.setItem("quantity", "List of people");
		localStorage.setItem("search", "Search");
		localStorage.setItem("find", "Find");

		localStorage.setItem("kupala", "Janka Kupala");
		localStorage.setItem("kolas", "Jakub Kolas");
		localStorage.setItem("bagdanovich", "Maksim Bagdanovich");
		localStorage.setItem("karatkevich", "Uladzimir Karatkevich");
		localStorage.setItem("gilevich", "Nil Gilevich");

		loader();
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function toBel() {
	if (typeof (Storage) !== "undefined") {
		localStorage.setItem("also", "Глядзіце таксама");
		localStorage.setItem("day", "Дзеяч дня");
		localStorage.setItem("intro", "Сардэчна запрашаем, наведвальнік (калі ласка, далучайся да нас) на гэты інтэрнэт-партал, дзе вы можаце знайсці інфармацыю аб некаторых беларускіх пісьменніках. Чытайце і пазнавайце новае!");
		localStorage.setItem("license", "Матэрыялы супольнасці даступныя ўадпаведнасці з умовамі ліцэнзіі CC-BY-SA, калі не пазначана іншае.");
		localStorage.setItem("list", "Спіс дзеячаў");
		localStorage.setItem("more", "Чытаць падрабязней");
		localStorage.setItem("support", "Па пытаннях тэхнічнай падтрымкі звяртацца да каманды франтэндэраў БДУІР ФКСіС ПЗІТ.");
		localStorage.setItem("title", "Галоўная");
		localStorage.setItem("workers", "Распрацоўшчыкі");

		localStorage.setItem("quantity", "Спіс дзеячаў");
		localStorage.setItem("langs", "Перакласці");
		localStorage.setItem("search", "Пошук");
		localStorage.setItem("find", "Знайсці");

		localStorage.setItem("kupala", "Янка Купала");
		localStorage.setItem("kolas", "Якуб Колас");
		localStorage.setItem("bagdanovich", "Максім Багдановіч");
		localStorage.setItem("karatkevich", "Уладзімір Караткевіч");
		localStorage.setItem("gilevich", "Ніл Гілевіч");

		loader();
	} else {
		document.getElementById("result").innerHTML = "На жаль, ваш браўзер не працуе са сховішчам даных карыстальніка.";
	}
}

function loadIfExists(string) {
	if (typeof (document.getElementById(string)) != 'undefined' && document.getElementById(string) != null) {
		if (localStorage.getItem(string) != null) {
			document.getElementById(string).innerHTML = localStorage.getItem(string);
		}
	}
}

function find() {
	var x = document.getElementById("mySearch").value;
	if (x.toLowerCase().includes("yakub")
		|| x.toLowerCase().includes("jakub")
		|| x.toLowerCase().includes("якуб")
		|| x.toLowerCase().includes("колас")
		|| x.toLowerCase().includes("кolas")
		|| x.toLowerCase().includes("колос")) {
		window.open("./jakub.html", "_self");
	} else if (x.toLowerCase().includes("bagdanovich")
		|| x.toLowerCase().includes("bogdanovich")
		|| x.toLowerCase().includes("bagdanovicz")
		|| x.toLowerCase().includes("bogdanovicz")
		|| x.toLowerCase().includes("maxim")
		|| x.toLowerCase().includes("maksim")
		|| x.toLowerCase().includes("богданович")
		|| x.toLowerCase().includes("багданович")
		|| x.toLowerCase().includes("багдановіч")
		|| x.toLowerCase().includes("максім")
		|| x.toLowerCase().includes("максим")) {
		window.open("./bagdanovich.html", "_self");
	} else if (x.toLowerCase().includes("gilevich")
		|| x.toLowerCase().includes("gilevicz")
		|| x.toLowerCase().includes("гілевіч")
		|| x.toLowerCase().includes("гилевич")
		|| x.toLowerCase().includes("нил")
		|| x.toLowerCase().includes("ніл")
		|| x.toLowerCase().includes("nil")) {
		window.open("./gilevich.html", "_self");
	} else if (x.toLowerCase().includes("karatkevich")
		|| x.toLowerCase().includes("korotkevich")
		|| x.toLowerCase().includes("karatkevicz")
		|| x.toLowerCase().includes("korotkevicz")
		|| x.toLowerCase().includes("караткевич")
		|| x.toLowerCase().includes("караткевіч")
		|| x.toLowerCase().includes("короткевич")
		|| x.toLowerCase().includes("uladzimir")
		|| x.toLowerCase().includes("vladimir")
		|| x.toLowerCase().includes("уладзимир")
		|| x.toLowerCase().includes("уладзімір")
		|| x.toLowerCase().includes("владимир")) {
		window.open("./karatkevich.html", "_self");
	} else if (x.toLowerCase().includes("kupala")
		|| x.toLowerCase().includes("купала")
		|| x.toLowerCase().includes("янка")
		|| x.toLowerCase().includes("yanka")
		|| x.toLowerCase().includes("janka")) {
		window.open("./kupala.html", "_self");
	}
}