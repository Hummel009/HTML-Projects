document.getElementById("lang-en").onclick = function() {
	toEng()
};

document.getElementById("lang-be").onclick = function() {
	toBel()
};

loader();

function loader() {
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
		localStorage.setItem("support", "For technical support, please contact the BSUIR FCSIS PSIT frontenders team.");
		localStorage.setItem("title", "Main Page");
		localStorage.setItem("workers", "Dungeon Masters");

		localStorage.setItem("langs", "Choose a language");
		localStorage.setItem("quantity", "List of people");
		localStorage.setItem("search", "Search");
		localStorage.setItem("find", "Find");

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