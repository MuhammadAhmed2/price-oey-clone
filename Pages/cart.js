const cartData = localStorage.getItem('userCart');
console.log(cartData);
let mycart = JSON.parse(cartData);
console.log(mycart);



let cartDisplay = document.querySelector('.cart');
let productInfo = document.querySelector('.billing');
let num
let totalPrice = []
renderCart();
function renderCart() {
    cartDisplay.innerHTML=`
        <div class="title">
            <div class="row">
                <div class="col"><h4><b>Shopping Cart</b></h4></div>
                <div class="col align-self-center text-right text-muted">Total Items in Cart: ${mycart.length}</div>
            </div>
        </div>
    `;
    for (let i = 0; i < mycart.length; i++) {
        if (totalPrice.includes(mycart[i].discountedPrice*mycart[i].quantity)===false) {
            totalPrice.push(mycart[i].discountedPrice*mycart[i].quantity)
        }
        console.log(totalPrice);
        cartDisplay.innerHTML +=
            `    
                <div class="row main align-items-center">
                    <div class="col-2"><img class="img-fluid" src="${mycart[i].image}"></div>
                    <div class="col">
                        <div class="row text-muted">${mycart[i].category}</div>
                        <div class="row">${mycart[i].name}</div>
                    </div>
                    <div class="col">
                        <p class=" d-flex border p-2 justify-content-around"><span onClick="quantityPlus(${i})" type="button">+</span><span class="text-center">${mycart[i].quantity}</span><span type="button" onClick="quantityMinus(${i})">-</span></p>
                    </div>
                    <div class="col">Per Pice: Rs.${mycart[i].discountedPrice}/- </div>
                    <div class="col">Rs.${mycart[i].discountedPrice*mycart[i].quantity}/- <span class="close" type="button" onClick="productDelete(${i})">&#10005;</span></div>
                </div>
            </div>
    `
    }
} 
function quantityPlus(i) {
    num = mycart[i].quantity
    num++
    mycart[i].quantity = num
    console.log(mycart[i].quantity);
    renderCart()
    renderSummary()
}
function quantityMinus(i) {
    num = mycart[i].quantity
    num--
    mycart[i].quantity = num
    console.log(mycart[i].quantity);
    renderCart()
    renderSummary()
}

let subTotalPrice = document.getElementById('totalPrice')
renderSummary()
function renderSummary() {
    for (let i = 0; i < mycart.length; i++) {
        
        
    }
    // const sum = totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    subTotalPrice.innerHTML=`Rs.${sum}/-`
}

