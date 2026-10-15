const cartBadge = document.querySelector("#cartValue");
if (cartBadge) {
  try {
    const items = JSON.parse(localStorage.getItem("cartProductLS") || "[]");
    cartBadge.innerHTML = `<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i> ${items.length}`;
  } catch {
    cartBadge.innerHTML = '<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i> 0';
  }
}
