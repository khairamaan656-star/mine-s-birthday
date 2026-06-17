const correctPin="0711";

function checkPin(){

let pin=
document.getElementById("pinInput").value;

if(pin===correctPin){

window.location.href=
"welcome.html";

}
else{

alert("Wrong PIN ❤️");

}

}

function showHint(){

let hint=
document.getElementById("hintText");

if(hint.style.display==="block"){

hint.style.display="none";

}
else{

hint.style.display="block";

}

}

for(let i=0;i<40;i++){

let heart=
document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.animationDuration=
(5+Math.random()*8)+"s";

heart.style.fontSize=
(15+Math.random()*25)+"px";

document.body.appendChild(heart);

}