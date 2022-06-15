let get = document.querySelector('#get');
let show = document.querySelector('#show')
let cart = [];

//
let textArea = document.querySelector('#nice');
const btn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove')

function addToList() {
    let getValue = textArea.value;
    if(getValue === "") {
        return false
    }
    let getValueSpace = " " + getValue;
    let addToCart = cart.push(getValueSpace)
    get.textContent = addToCart;
    show.textContent = cart.toString();
    textArea.value = "";
}
function removeItem() {
    cart.pop();
    show.textContent = cart.toString()
    get.textContent = cart.length;
}


//


