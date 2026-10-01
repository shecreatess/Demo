let cart = [];

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  const button = event?.target;

  if (button) {

    const original = button.innerText;

    button.innerText = "✓";

    setTimeout(() => {
      button.innerText = original;
    }, 800);

  }
}


function updateCart() {

  document.getElementById("cartCount").innerText =
    cart.length;

  const container =
    document.getElementById("cartItems");

  if (cart.length === 0) {

    container.innerHTML =
      "<p>Your bag is empty.</p>";

    document.getElementById("cartTotal").innerText =
      "₦0";

    return;
  }


  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    const div =
      document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `

      <div>

        <strong>${item.name}</strong>

        <br>

        <small>
          ₦${item.price.toLocaleString()}
        </small>

      </div>

      <button
        onclick="removeItem(${index})"
        style="
          border:none;
          background:none;
          color:red;
          cursor:pointer;
        "
      >
        REMOVE
      </button>

    `;

    container.appendChild(div);

  });


  document.getElementById("cartTotal").innerText =
    "₦" + total.toLocaleString();

}


function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}


function openCart() {

  document
    .getElementById("cartModal")
    .classList.add("active");

  updateCart();

}


function closeCart() {

  document
    .getElementById("cartModal")
    .classList.remove("active");

}


function buildCombo() {

  addToCart(
    "Pepsi Combo",
    18000
  );

  alert(
    "Your Pepsi Combo has been added to your bag 🥤🍔"
  );

}


function checkout() {

  if (cart.length === 0) {

    alert("Your bag is empty.");

    return;

  }

  alert(
    "Demo checkout! Your order has been prepared."
  );

}
