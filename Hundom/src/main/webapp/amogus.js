document.getElementById("lang-en").onclick = function() {
	toEng()
};

document.getElementById("find").onclick = function() {
	find()
};

document.getElementById("lang-be").onclick = function() {
	toBel()
};

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
	if (x.includes("Yakub") 
		|| x.includes("Jakub") 
		|| x.includes("Якуб") 
		|| x.includes("Колас") 
		|| x.includes("Kolas") 
		|| x.includes("Колос")) {
		window.open("./jakub.html", "_self");
	} else if (x.includes("Bagdanovich") 
		|| x.includes("Bogdanovich") 
		|| x.includes("Bagdanovicz") 
		|| x.includes("Bogdanovicz") 
		|| x.includes("Maxim") 
		|| x.includes("Maksim") 
		|| x.includes("Богданович") 
		|| x.includes("Багданович") 
		|| x.includes("Багдановіч") 
		|| x.includes("Максім") 
		|| x.includes("Максим")) {
		window.open("./bagdanovich.html", "_self");
	} else if (x.includes("Gilevich") 
		|| x.includes("Gilevicz") 
		|| x.includes("Гілевіч") 
		|| x.includes("Гилевич") 
		|| x.includes("Нил") 
		|| x.includes("Ніл") 
		|| x.includes("Nil")) {
		window.open("./gilevich.html", "_self");
	} else if (x.includes("Karatkevich") 
		|| x.includes("Korotkevich") 
		|| x.includes("Karatkevicz") 
		|| x.includes("Korotkevicz")
		|| x.includes("Караткевич")  
		|| x.includes("Караткевіч") 
		|| x.includes("Короткевич") 
		|| x.includes("Uladzimir") 
		|| x.includes("Vladimir") 
		|| x.includes("Уладзимир") 
		|| x.includes("Уладзімір") 
		|| x.includes("Владимир")) {
		window.open("./karatkevich.html", "_self");
	} else if (x.includes("Kupala") 
		|| x.includes("Купала") 
		|| x.includes("Янка") 
		|| x.includes("Yanka") 
		|| x.includes("Janka")) {
		window.open("./kupala.html", "_self");
	} 
}