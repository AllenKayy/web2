
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src.replace('thumb', 'image-product');
    thumbnails.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let quantity = 0;
  const plusBtn = document.querySelector('.plus');
  const minusBtn = document.querySelector('.minus');
  const quantityDisplay = document.querySelector('.quantity');
  const addToCartBtn = document.querySelector('.add-to-cart');
  const cartIcon = document.querySelector('.cart-icon');
  const cartDropdown = document.getElementById('cart-dropdown');
  const cartContent = document.getElementById('cart-content');


  plusBtn.onclick = () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  };

  minusBtn.onclick = () => {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  };


  addToCartBtn.onclick = () => {
    if (quantity === 0) {
      alert('Please select quantity');
      return;
    }

    const total = (125 * quantity).toFixed(2);

    cartContent.innerHTML = `
      <div class="cart-item">
        <img src="images/image-product-1.jpg" alt="sneaker thumbnail" />
        <div class="cart-info">
          <span>Fall Limited Edition Sneakers</span>
          <small>$125.00 × ${quantity} <strong>$${total}</strong></small>
        </div>
        <img src="images/icon-delete.svg" alt="delete" class="delete-item" style="cursor:pointer; width: 16px;">
      </div>
      <button class="checkout-btn">Checkout</button>
    `;

   
    const deleteBtn = document.querySelector('.delete-item');
    deleteBtn.onclick = () => {
      cartContent.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
      quantity = 0;
      quantityDisplay.textContent = 0;
    };
  };

  cartIcon.onclick = () => {
    cartDropdown.classList.toggle('hidden');
  };

  window.onclick = (e) => {
    if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
      cartDropdown.classList.add('hidden');
    }
  };
});

const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.onclick = () => {
  navLinksContainer.style.display = navLinksContainer.style.display === 'block' ? 'none' : 'block';
};

const imageList = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

let currentImageIndex = 0;
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
  mainImage.src = imageList[currentImageIndex];
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  mainImage.src = imageList[currentImageIndex];
});


const contentMap = {
  collections: `
    <h1>Collections</h1>
    <p>Explore our exclusive sneaker collections here.</p>
  `,
  men: `
    <h1>Men's Sneakers</h1>
    <p>Check out our premium styles for men.</p>
  `,
  women: `
    <h1>Women's Sneakers</h1>
    <p>Stylish and comfortable shoes for women.</p>
  `,
  about: `
    <h1>About Us</h1>
    <p>We’re a modern sneaker brand focused on comfort and design.</p>
  `,
  contact: `
    <h1>Contact Us</h1>
    <p>Email: support@sneakers.com<br>Phone: +123-456-7890</p>
  `
};

const navLinksItems = document.querySelectorAll('.nav-links a');
const pageContent = document.getElementById('page-content');

navLinksItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');
    pageContent.innerHTML = contentMap[page] || '<h1>Page Not Found</h1>';
  });
});
