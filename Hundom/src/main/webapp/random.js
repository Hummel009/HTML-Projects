function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (getRandomInt(2) == 0) {
	document.getElementById("featured-1").style.display = "block";
} else {
	document.getElementById("featured-2").style.display = "block";
}