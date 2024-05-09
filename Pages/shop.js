const savedProductData = localStorage.getItem('savedProduct');

    let savedProduct = JSON.parse(savedProductData);
    console.log(savedProduct);

let div = document.querySelector("main");


let cartIcon = "../img/cart-add.svg"

function renderProduct() {
  div.innerHTML  = `
<section class="img">
<img src="${savedProduct.image}" alt="" class="img-main">
</section>

<section class="price">
<h2 class="price-sub__heading">${savedProduct.category}</h2>
<h1 class="price-main__heading">${savedProduct.name}</h1>
<p class="price-txt">${savedProduct.description}</p>
<div class="price-box">
  <div class="price-box__main">
    <span class="price-box__main-new">Rs.${savedProduct.discountedPrice}</span>
    <span class="price-box__main-discount">${savedProduct.percentageOff}% OFF</span>
  </div>
  <span class="price-box__old">Rs.${savedProduct.originalPrice}/-</span>
</div>

<div class="price-btnbox">
  <div class="price-btns">
    <button onClick="quantityPlus()" class="price-btn__add price-btn">
      <img src="../img/plus.svg" alt="plus sign" width="15px" class="price-btn__add-img price-btn__img">
    </button>
    <span class="price-btn__txt quantityDisplay">${savedProduct.quantity}</span>
    <button onClick="quantityMinus()" class="price-btn__remove price-btn">
      <img src="../img/minus.svg" alt="minus sign" width="15px" class="price-btn__remove-img price-btn__img">
    </button>
  </div>
  <button onClick="addToCart()" class="price-cart__btn btn--orange">
    <img src="${cartIcon}" alt="cart image" width="20px" class="price-cart__btn-img">
    Add to cart
  </button>
</div>
</section>
`
}

renderProduct()

let quantityDisplay = document.querySelector('.quantityDisplay')
let num = savedProduct.quantity

function quantityPlus() {
    num++
    savedProduct.quantity = num
    quantityDisplay.innerHTML = savedProduct.quantity
    console.log(savedProduct.quantity);
    renderProduct()
}
function quantityMinus() {
    num--
    quantityDisplay.innerHTML = num
    savedProduct.quantity = num
    console.log(savedProduct.quantity);
    renderProduct()
}

let cart = []

function addToCart() {
  cartIcon = "../img/cart-check.svg"
    cart.push(savedProduct)
    console.log(cart);
    localStorage.setItem("userCart", cart) 
    renderProduct()
}

