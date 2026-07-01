/**
 * Alkhateeb Apiary — Cart Logic & WhatsApp Order Integration
 * Handles all cart state (localStorage), UI updates, and order generation.
 */

const CART_KEY = "alkhateeb_cart";
// ⚠️ Replace with the real WhatsApp number (Jordan international format, no + sign)
const WHATSAPP_NUMBER = "962799999999";

// ─── State ────────────────────────────────────────────────────────────────────

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

// ─── Mutations ────────────────────────────────────────────────────────────────

/**
 * addToCart(productId, quantity, sizeIndex)
 * sizeIndex 0 = 500g, 1 = 1kg (matches product.sizes[])
 * cartKey = "productId_sizeIndex" — allows same product in different sizes.
 */
function addToCart(productId, quantity, sizeIndex) {
  sizeIndex = (sizeIndex !== undefined) ? parseInt(sizeIndex) : 0;
  quantity  = parseInt(quantity) || 1;
  const cart    = getCart();
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const size    = product.sizes[sizeIndex];
  if (!size) return;

  const cartKey = productId + "_" + sizeIndex;
  const existing = cart.find((i) => i.cartKey === cartKey);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      cartKey,
      id:       productId,
      sizeIndex,
      quantity,
      name:     product.name,
      nameAr:   product.nameAr,
      price:    size.price,
      weight:   size.weight,
      weightAr: size.weightAr,
    });
  }
  saveCart(cart);
  showToast(`🍯 ${product.name} (${size.weight}) added to cart!`);
  if (typeof renderCart === "function") renderCart();
}

function removeFromCart(cartKey) {
  saveCart(getCart().filter((i) => i.cartKey !== cartKey));
  if (typeof renderCart === "function") renderCart();
}

function changeQuantity(cartKey, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.cartKey === cartKey);
  if (!item) return;
  item.quantity = Math.max(0, item.quantity + delta);
  if (item.quantity === 0) {
    saveCart(cart.filter((i) => i.cartKey !== cartKey));
  } else {
    saveCart(cart);
  }
  if (typeof renderCart === "function") renderCart();
}

function setItemQuantity(cartKey, qty) {
  const q    = parseInt(qty);
  const cart = getCart();
  const item = cart.find((i) => i.cartKey === cartKey);
  if (!item) return;
  if (isNaN(q) || q <= 0) {
    saveCart(cart.filter((i) => i.cartKey !== cartKey));
  } else {
    item.quantity = q;
    saveCart(cart);
  }
  if (typeof renderCart === "function") renderCart();
}

// ─── UI ──────────────────────────────────────────────────────────────────────

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle("hidden", totalItems === 0);
  }
}

function showToast(message) {
  // Remove any existing toast
  document.querySelectorAll(".apiary-toast").forEach((t) => t.remove());

  const toast = document.createElement("div");
  toast.className =
    "apiary-toast fixed bottom-6 right-6 bg-amber-800 text-white px-5 py-3 rounded-xl shadow-2xl z-[9999] text-sm font-medium flex items-center gap-2 opacity-0 translate-y-2 transition-all duration-300 pointer-events-none";
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove("opacity-0", "translate-y-2");
  });

  // Animate out & remove
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 320);
  }, 3000);
}

// ─── WhatsApp Order Link ──────────────────────────────────────────────────────

/**
 * Generates a pre-filled WhatsApp message URL for manual order processing.
 * @param {{ name: string, mobile: string, address: string }} customer
 * @returns {string|null}
 */
function generateWhatsAppLink(customer) {
  const cart = getCart();
  if (cart.length === 0) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let msg = `🍯 *New Order — Alkhateeb Apiary*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `*👤 Customer Details*\n`;
  msg += `Name: ${customer.name}\n`;
  msg += `Mobile: ${customer.mobile}\n`;
  msg += `Address: ${customer.address}\n\n`;
  msg += `*📦 Order Items*\n`;
  cart.forEach((item) => {
    const lineTotal = (item.price * item.quantity).toFixed(0);
    const label = `${item.name} (${item.weight || ""})`;
    msg += `• ${label} × ${item.quantity} ${item.quantity === 1 ? "jar" : "jars"} — ${lineTotal} JOD\n`;
  });
  msg += `\n*💰 Total: ${total.toFixed(0)} JOD*\n`;
  msg += `_Delivery to be confirmed by our team._\n`;
  msg += `\n_Sent via alkhateebapiary.jo_`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", updateCartBadge);
