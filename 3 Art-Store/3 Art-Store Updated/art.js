let cart = [];
let total = 0;
function showLogin() {
    document.getElementById('login-section').classList.toggle('hidden');
    document.getElementById('cart-section').classList.add('hidden');
}
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "user" && password === "pass") {
    alert("Login Successful!");
    document.getElementById('username').value="";
    document.getElementById('password').value="";
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('gallery-section').classList.toggle('hidden');
    document.getElementById('cart-btn').classList.toggle('hidden');
    document.getElementById('signout-btn').classList.toggle('hidden');
    } else if(username==="69"){
        alert("Easter Egg Found!\nLogin Successful!");
        document.getElementById('username').value="";
        document.getElementById('password').value="";
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('gallery-section').classList.toggle('hidden');
        document.getElementById('cart-btn').classList.toggle('hidden');
        document.getElementById('signout-btn').classList.toggle('hidden');
    } else {
    alert("Invalid Credentials!");
    }
    return false;
}
function signOut(){
    document.getElementById('gallery-section').classList.add('hidden');
    document.getElementById('cart-section').classList.add('hidden');
    document.getElementById('cart-btn').classList.add('hidden');
    document.getElementById('signout-btn').classList.add('hidden');
    document.getElementById('login-section').classList.toggle('hidden');
}
function addToCart(item, price) {
    cart.push({item, price});
    total += price;
    updateCart();
}
function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    let cartList = document.getElementById('cart-list');
    cartList.innerHTML = "";
    cart.forEach((c, i) => {
    let li = document.createElement('li');
    li.innerText = c.item + " - $" + c.price;
    cartList.appendChild(li);
    });
    document.getElementById('cart-total').innerText = total;
}
function showCart() {
    document.getElementById('cart-section').classList.toggle('hidden');
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('gallery-section').classList.toggle('hidden');
}
function checkout() {
    alert("Checkout successful! Total: $" + total);
    cart = [];
    total = 0;
    updateCart();
    showCart();
}