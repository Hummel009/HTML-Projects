document.querySelector('#btn1').addEventListener('click', () => {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderTop = '2px solid transparent';
    }
    buttons[0].style.borderTop = '2px solid white';
})
document.querySelector('#btn2').addEventListener('click', () => {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderTop = '2px solid transparent';
    }
    buttons[1].style.borderTop = '2px solid white';
})
document.querySelector('#btn3').addEventListener('click', () => {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderTop = '2px solid transparent';
    }
    buttons[2].style.borderTop = '2px solid white';
})
document.querySelector('#btn4').addEventListener('click', () => {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderTop = '2px solid transparent';
    }
    buttons[3].style.borderTop = '2px solid white';
})
document.querySelector('#btn5').addEventListener('click', () => {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderTop = '2px solid transparent';
    }
    buttons[4].style.borderTop = '2px solid white';
})
document.querySelector('#btn6').addEventListener('click', () => {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.borderTop = '2px solid transparent';
    }
    buttons[5].style.borderTop = '2px solid white';
})
document.querySelector('#lastbtn').addEventListener('click', () => {
    var data1 = document.querySelector('#inp1').value;
    var data2 = document.querySelector('#inp2').value;
    var data3 = document.querySelector('#inp3').value;
    var data4 = document.querySelector('#inp4').value;
    let colorArray = document.getElementsByClassName("inp");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (data1.length < 2 || !data2.match(pattern) || data3.length == 0 || data4.length == 0) {
        for (i = 0; i < colorArray.length; i++) {
            colorArray[i].style.backgroundColor = "#FF0000";
            colorArray[i].style.background = 'rgba(255,0,0,0.3)';
            document.getElementById("dial").innerHTML = "   Missing or invalid value!";
        }
    } else {
        for (i = 0; i < colorArray.length; i++) {
            colorArray[i].style.backgroundColor = "rgb(255,255,255)";
            colorArray[i].value = '';
            document.getElementById("dial").innerHTML = "   Booking completed, check your email!";
        }
    }
})