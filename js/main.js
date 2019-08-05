var nmbr;
var newNmbr;


//cached elements
var display = document.getElementById('display');
var input = document.querySelector('input');



//event listener

var plus = document.querySelector('button')
plus.addEventListener('click', function(evt) {
newNmbr = nmbr += parseInt(input.value);
render();
})


var minus = document.getElementById('minus')
minus.addEventListener('click', function(evt) {
newNmbr = nmbr -= parseInt(input.value);
render();
})



//functions

function initialize() {
  nmbr = 0;
    render();
}



function render() {
    display.textContent = newNmbr;
    // document.setAttribute('display',nmbr);
};

initialize();

//gets content of display
//adds one with each plus button click
    //button works, is connected to display

//input is not being captured
    //may not be connected to display