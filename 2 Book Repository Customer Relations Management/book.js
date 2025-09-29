let customers = [];
let orders = [];
function addCustomer() {
    let name = document.getElementById("customerName").value.trim();
    let email = document.getElementById("customerEmail").value.trim();
    if (!name || !email) {
        alert("Please enter customer details.");
        return;
    }
    let customer = { id: Date.now(), name, email };
    customers.push(customer);
    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    updateCustomerList();
    updateCustomerSelect();
}
function addOrder() {
    let customerId = document.getElementById("customerSelect").value;
    let bookTitle = document.getElementById("bookTitle").value.trim();
    let qty = document.getElementById("bookQty").value;
    if (!customerId || !bookTitle || qty <= 0) {
    alert("Please fill in all order details.");
    return; }
    let order = {
    id: Date.now(),
    customerId,
    bookTitle,
    qty
    };
    orders.push(order);
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookQty").value = "";
    updateOrderList();
}
function updateCustomerList() {
 let list = document.getElementById("customerList");
 list.innerHTML = "";
 customers.forEach(c => {
 let li = document.createElement("li");
 li.innerHTML = `${c.name} (${c.email})
 <button class="delete-btn" onclick="deleteCustomer(${c.id})">Delete</button>`;
 list.appendChild(li);
 });
}
function updateOrderList() {
 let list = document.getElementById("orderList");
 list.innerHTML = "";
 orders.forEach(o => {
 let customer = customers.find(c => c.id == o.customerId);
 let li = document.createElement("li");
 li.innerHTML = `${o.bookTitle} (x${o.qty}) - for ${customer ? customer.name : "Unknown"}
 <button class="delete-btn" onclick="deleteOrder(${o.id})">Delete</button>`;
 list.appendChild(li);
 });
}
function updateCustomerSelect() {
 let select = document.getElementById("customerSelect");
 select.innerHTML = "<option value=''>Select Customer</option>";
 customers.forEach(c => {
 let option = document.createElement("option");
 option.value = c.id;
 option.textContent = c.name;
 select.appendChild(option);
 });
}
function deleteCustomer(id) {
 customers = customers.filter(c => c.id !== id);
 orders = orders.filter(o => o.customerId != id); // remove related orders
 updateCustomerList();
 updateOrderList();
 updateCustomerSelect();
}
function deleteOrder(id) {
 orders = orders.filter(o => o.id !== id);
 updateOrderList();
} 

