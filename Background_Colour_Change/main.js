// create a function to create a random 6 character string - 000000 === white
// create a function that takes in the outputted string above, and passes it 
// into the DOM.

function createColour() {
    var hexcodes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var hex = ['#'];
    for (let index = 0; index < 6; index++) {
        var num = Math.floor(Math.random() * 11)
        hex += hexcodes[num]
    };
    let hexcode = hex.toString();
    return hexcode;
};

function changeBackground(hexcode) {
    document.body.style.backgroundColor = hexcode;
};

