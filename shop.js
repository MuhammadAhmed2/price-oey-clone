const savedProductData = localStorage.getItem('savedProduct');

    let savedProduct = JSON.parse(savedProductData);
    console.log(savedProduct);

let div = document.querySelector('.product-container');

div.innerHTML  = `
    <div class="product">
    <img src="${savedProduct.image}" alt="Product Image">
    <h2 class="product-name">${savedProduct.name}</h2>
    <p class="product-description">${savedProduct.description}</p>
    <div class="price">
        <h3 class="original-price">Original Price: Rs.${savedProduct.originalPrice}/-</h3>
        <h3 class="discounted-price">Discounted Price: Rs.${savedProduct.discountedPrice}/-</h3>
    </div>
    <button class="add-to-cart-btn">Add to Cart</button>
    </div>
`
