console.log('This is Event with DOM');

// Changing bg with function (system 2)
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// Changing bg with id on function(System 3)
const blueBg = document.getElementById('blue-bg');
blueBg.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


// Simple way of (System 3)
const purpleBg = document.getElementById('purple-bg');
purpleBg.onclick = function (){
    document.body.style.backgroundColor = 'purple';
}


// System 4
const pinkButton = document.getElementById('pink-bg');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// System 4(Another way)
const greenButton = document.getElementById('green-bg');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})


// System 5: Short and final way(Mostly used)
document.getElementById('dark-bg').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})