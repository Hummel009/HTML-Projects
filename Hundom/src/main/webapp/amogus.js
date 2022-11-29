document.getElementById("lang-en").onclick = function() {
	toEng()
};
document.getElementById("lang-be").onclick = function() {
	toBel()
};

function toEng() {
	if (typeof (Storage) !== "undefined") {
		localStorage.setItem("langss", "Choose a language");
		localStorage.setItem("titles", "Main Page");
		localStorage.setItem("lists", "List of people");
		localStorage.setItem("intros", "Welcome, visitor (please join us) to this internet portal where you can find information about some Belarusian writers. Read and learn new things!");
		document.getElementById("langs").innerHTML = localStorage.getItem("langss");
		document.getElementById("title").innerHTML = localStorage.getItem("titles");
		document.getElementById("list").innerHTML = localStorage.getItem("lists");
		document.getElementById("intro").innerHTML = localStorage.getItem("intros");
	} else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function toBel() {
	if (typeof (Storage) !== "undefined") {
		localStorage.setItem("langss", "Перакласці");
		localStorage.setItem("titles", "Галоўная");
		localStorage.setItem("lists", "Спіс дзеячаў");
		localStorage.setItem("intros", "Сардэчна запрашаем, наведвальнік (калі ласка, далучайся да нас) на гэты інтэрнэт-партал, дзе вы можаце знайсці інфармацыю аб некаторых беларускіх пісьменніках. Чытайце і пазнавайце новае!");
		document.getElementById("langs").innerHTML = localStorage.getItem("langss");
		document.getElementById("title").innerHTML = localStorage.getItem("titles");
		document.getElementById("list").innerHTML = localStorage.getItem("lists");
		document.getElementById("intro").innerHTML = localStorage.getItem("intros");
	} else {
		document.getElementById("result").innerHTML = "На жаль, ваш браўзер не працуе са сховішчам даных карыстальніка.";
	}
}