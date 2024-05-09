let products = [
  {
    name: "Ronin R-520",
    image: "https://images.priceoye.pk/ronin-r-520-earbuds-pakistan-priceoye-0mmrt-270x270.webp",
    originalPrice: 1500,
    quantity: 1,
    discountedPrice: 1200,
    category: 'Wireless Earpods',
    description: "Sleek and stylish wireless earpods with excellent sound quality."
},
{
    name: "Itel KT-01",
    image: "https://images.priceoye.pk/itel-pakistan-priceoye-cubi7-270x270.webp",
    originalPrice: 1200,
    quantity: 1,
    discountedPrice: 950,
    category: 'Wireless Earpods',
    description: "Affordable wireless earpods with a comfortable fit."
},
{
    name: "Audionic Ultra",
    image: "https://images.priceoye.pk/soundpeats-opera05-wireless-earbuds-pakistan-priceoye-qwxlf-270x270.webp",
    originalPrice: 2500,
    quantity: 1,
    discountedPrice: 2400,
    category: 'Wireless Earpods',
    description: "Premium wireless earpods delivering crystal clear sound."
},
{
    name: "Apple",
    image: "https://images.priceoye.pk/m10-tws-wireless-bluetooth-earbuds-pakistan-priceoye-genxn-270x270.webp",
    originalPrice: 8500,
    quantity: 1,
    discountedPrice: 7250,
    category: 'Wireless Earpods',
    description: "Iconic wireless earpods from Apple, offering unmatched quality."
},
{
    name: "Black Berry nano",
    image: "https://images.priceoye.pk/dany-wireless-earbuds-airdots-110-pakistan-priceoye-lasmy-270x270.webp",
    originalPrice: 48556,
    quantity: 1,
    discountedPrice: 8754,
    category: 'Wireless Earpods',
    description: "Compact nano-sized earpods with exceptional sound performance."
},
{
    name: "Deta X5",
    image: "https://images.priceoye.pk/audionic-wireless-airbuds-425-pakistan-priceoye-x6grd-270x270.webp",
    originalPrice: 5459,
    quantity: 1,
    discountedPrice: 3500,
    category: 'Wireless Earpods',
    description: "High-quality wireless earpods designed for active lifestyles."
},
{
    name: "SoundWave SW-200",
    image: "https://images.priceoye.pk/audionic-wireless-airbuds-425-pakistan-priceoye-x6grd-270x270.webp",
    originalPrice: 1800,
    quantity: 1,
    discountedPrice: 1500,
    category: "Wireless Headphones",
    description: "Immersive wireless headphones with powerful sound output."
},
{
    name: "Auralife AL-900",
    image: "https://images.priceoye.pk/air-31-tws-transparent-earbuds-pakistan-priceoye-wz5m6-270x270.webp",
    originalPrice: 2200,
    quantity: 1,
    discountedPrice: 1900,
    category: "Wireless Headphones",
    description: "Comfortable wireless headphones with a stylish design."
}

];

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

let productPlaceholder = document.querySelector(".grid-container")

 function renderProduct() {
    for (let i = 0; i < products.length; i++) {
      let percentage = (products[i].originalPrice - products[i].discountedPrice) / (products[i].discountedPrice) * 100;
      percentage = Math.round(percentage)
      products[i].percentageOff = percentage;
      productPlaceholder.innerHTML += `
              <div onClick="saveProduct(${i})" class="grid-item"><img
              src="${products[i].image}" alt="">
          <p>${products[i].name}</p>
          <h5><sup>Rs</sup>${products[i].discountedPrice}</h5>

          <div class="price">
              <h6><sup>Rs</sup>${products[i].originalPrice}</h6>
              <div class="off-container">
                  <p>${percentage}% OFF</p>
              </div>
          </div>
        </div>`
    }
 }

 renderProduct()

 function saveProduct(index) {
  let productData = JSON.stringify(products[index]);
  localStorage.setItem('savedProduct', productData);
  console.log(productData);
  
  // Redirect to shop.html
  window.location.href = './Pages/shop.html';
}