const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 480,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
{/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>*/}
renderProducts(productList);
function renderProducts(arr) {
    for (const product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const cartFigure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgCart.setAttribute('alt', 'producto');
        cartFigure.appendChild(imgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(cartFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}