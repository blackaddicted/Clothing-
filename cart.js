/* ==========================================================================
   MAISON NOIR — Cart, Orders & Storage
   ========================================================================== */

const STORAGE_KEYS = {
  cart: "mn_cart",
  orders: "mn_orders",
  products: "mn_products_overrides"
};

/* ---------- cart ---------- */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, size, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, size, qty });
  }
  saveCart(cart);
}

function updateCartQty(productId, size, qty) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) {
    item.qty = Math.max(1, qty);
  }
  saveCart(cart);
}

function removeFromCart(productId, size) {
  let cart = getCart().filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, i) => {
    const p = getProductById(i.id);
    return p ? sum + p.price * i.qty : sum;
  }, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

/* ---------- orders ---------- */

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.orders)) || [];
  } catch (e) {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
}

function createOrder(customer, items, total, payment) {
  const orders = getOrders();
  const id = "MN" + Date.now().toString().slice(-8);
  const order = {
    id,
    customer,
    items,
    total,
    payment,
    status: "Placed",
    date: new Date().toISOString()
  };
  orders.unshift(order);
  saveOrders(orders);
  return order;
}

function getOrderById(id) {
  return getOrders().find(o => o.id.toLowerCase() === String(id).toLowerCase());
}

function updateOrderStatus(id, status) {
  const orders = getOrders();
  const order = orders.find(o => o.id === id);
  if (order) order.status = status;
  saveOrders(orders);
}

const ORDER_STEPS = ["Placed", "Packed", "Shipped", "Delivered"];

/* ---------- product overrides (admin add/edit/delete) ---------- */

function getProductOverrides() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.products)) || { added: [], edited: {}, deleted: [] };
  } catch (e) {
    return { added: [], edited: {}, deleted: [] };
  }
}

function saveProductOverrides(o) {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(o));
}

function getAllProductsLive() {
  const o = getProductOverrides();
  const base = PRODUCTS
    .filter(p => !o.deleted.includes(p.id))
    .map(p => (o.edited[p.id] ? { ...p, ...o.edited[p.id] } : p));
  return [...base, ...o.added];
}

function adminAddProduct(product) {
  const o = getProductOverrides();
  o.added.push(product);
  saveProductOverrides(o);
}

function adminEditProduct(id, changes) {
  const o = getProductOverrides();
  if (o.added.some(p => p.id === id)) {
    o.added = o.added.map(p => (p.id === id ? { ...p, ...changes } : p));
  } else {
    o.edited[id] = { ...(o.edited[id] || {}), ...changes };
  }
  saveProductOverrides(o);
}

function adminDeleteProduct(id) {
  const o = getProductOverrides();
  if (o.added.some(p => p.id === id)) {
    o.added = o.added.filter(p => p.id !== id);
  } else if (!o.deleted.includes(id)) {
    o.deleted.push(id);
  }
  saveProductOverrides(o);
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
