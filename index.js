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
    let addToCart = cart.push(getValue)
    console.log(addToCart)
    get.textContent = addToCart;
    show.textContent = cart.toString();
}
function removeItem() {
    cart.pop();
    show.textContent = cart.toString()
    get.textContent = cart.length;
}


//


