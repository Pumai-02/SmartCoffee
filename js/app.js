// DATA
const menuData = [
  { id:1,  cat:'espresso', emoji:'☕', name:'Flat White',        desc:'Velvety micro-foam over double ristretto',        price:4.50, badge:'Best seller' },
  { id:2,  cat:'espresso', emoji:'🍵', name:'Cappuccino',        desc:'Classic foam cap on double espresso',             price:4.20, badge:null },
  { id:3,  cat:'espresso', emoji:'🥃', name:'Long Black',        desc:'Hot water over a double ristretto shot',          price:3.80, badge:null },
  { id:4,  cat:'espresso', emoji:'🍫', name:'Mocha',             desc:'Espresso, dark chocolate & steamed milk',         price:5.00, badge:null },
  { id:5,  cat:'espresso', emoji:'🌅', name:'Cortado',           desc:'Equal parts espresso and warm milk',              price:4.00, badge:'New' },
  { id:6,  cat:'cold',     emoji:'🧊', name:'Cold Brew',         desc:'12-hour steeped, smooth and bold',                price:5.00, badge:'Popular' },
  { id:7,  cat:'cold',     emoji:'🥛', name:'Iced Latte',        desc:'Espresso over ice with your choice of milk',      price:5.50, badge:null },
  { id:8,  cat:'cold',     emoji:'🧋', name:'Nitro Cold Brew',   desc:'Silky nitrogen-infused cold brew',                price:6.00, badge:'New' },
  { id:9,  cat:'tea',      emoji:'🍵', name:'Matcha Latte',      desc:'Ceremonial-grade matcha, oat milk',               price:5.50, badge:'Fan fave' },
  { id:10, cat:'tea',      emoji:'🌸', name:'Chai Latte',        desc:'Spiced masala chai with steamed milk',            price:4.80, badge:null },
  { id:11, cat:'tea',      emoji:'🫖', name:'Earl Grey Tea',     desc:'Fragrant bergamot loose-leaf blend',              price:3.50, badge:null },
  { id:12, cat:'pastry',   emoji:'🥐', name:'Croissant',         desc:'Buttery, flaky, baked fresh daily',               price:3.20, badge:null },
  { id:13, cat:'pastry',   emoji:'🍰', name:'Banana Bread',      desc:'Moist, nutty, house-made each morning',           price:4.00, badge:'Popular' },
  { id:14, cat:'pastry',   emoji:'🧁', name:'Blueberry Muffin',  desc:'Bursting with fresh blueberries',                 price:3.80, badge:null },
  { id:15, cat:'pastry',   emoji:'🍪', name:'Choc Chip Cookie',  desc:'Warm, gooey, straight from the oven',            price:2.80, badge:null },
  { id:16, cat:'pastry',   emoji:'🍪', name:'Choc Chip Cookie',  desc:'Warm, gooey, straight from the oven',            price:2.80, badge:null },
];

const menuImages = {
  1: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  2: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  3: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  4: 'https://images.unsplash.com/photo-1579888071069-c107a6f79d82?auto=format&fit=crop&w=800&q=80',
  5: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  6: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
  7: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
  8: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
  9: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80',
  10: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80',
  11: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
  12: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  13: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
  14: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80',
  15: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
  16: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
};

menuData.forEach(item => {
  item.image = menuImages[item.id];
});

const orderCats = {
  espresso: [1, 2, 3, 4, 5],
  cold:     [6, 7, 8],
  food:     [9, 10, 12, 13, 14, 15],
};

// STATE
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('smartCoffeeCart')) || {};
  } catch (error) {
    return {};
  }
}

function saveCart() {
  localStorage.setItem('smartCoffeeCart', JSON.stringify(cart));
}

let cart = loadCart();
let currentFilter = 'all';

// NAVIGATION
function showPage(id) {
  if (!document.getElementById('page-' + id)) {
    window.location.href = id + '.html';
    return;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const navLink = document.getElementById('nav-' + id);
  if (navLink) navLink.classList.add('active');
  window.scrollTo(0, 0);
}

// DARK MODE
function toggleDark() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.btn-dark');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
}


// TOAST
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// MENU PAGE
function getBg(cat) {
  const map = { espresso: '#FAEEDA', cold: '#E1F5EE', tea: '#EEEDFE', pastry: '#FAECE7' };
  return map[cat] || '#F9F6F1';
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const items = currentFilter === 'all'
    ? menuData
    : menuData.filter(i => i.cat === currentFilter);

  grid.innerHTML = items.map(item => `
    <div class="menu-item" data-id="${item.id}">
      <div class="menu-img" style="background:${getBg(item.cat)}">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<div class="menu-badge">${item.badge}</div>` : ''}
      </div>
      <div class="menu-body">
        <div class="menu-name">${item.name}</div>
        <div class="menu-desc">${item.desc}</div>
        <div class="menu-footer">
          <div class="menu-price">$${item.price.toFixed(2)}</div>
          <button class="btn-add"
            onclick="addToCart(${item.id},'${item.name}','${item.emoji}',${item.price})"
            aria-label="Add ${item.name} to cart">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

// CART
function addToCart(id, name, emoji, price) {
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { name, emoji, price, qty: 1 };
  }
  updateCartUI();
  showToast(`${emoji} ${name} added to cart!`);
}

function removeFromCart(id) {
  delete cart[id];
  updateCartUI();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}

function updateCartUI() {
  saveCart();
  const count = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const total = Object.values(cart).reduce((s, i) => s + i.qty * i.price, 0);

  // Navbar badge
  const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = count;

  // Order-page cart panel
  const el = document.getElementById('cartContents');
  if (!el) return;

  if (count === 0) {
    el.innerHTML = `
      <div class="cart-empty">
        <div class="icon">Cart</div>
        Your cart is empty.<br><small>Add items from the left.</small>
      </div>`;
    return;
  }

  const rows = Object.entries(cart).map(([id, item]) => `
    <li class="cart-row">
      <div class="cart-row-info">
        <span class="cart-row-emoji">${item.emoji}</span>
        <div>
          <div class="cart-row-name">${item.name}</div>
          <div class="cart-row-qty">x ${item.qty}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:6px">
        <span class="cart-row-price">$${(item.qty * item.price).toFixed(2)}</span>
        <button class="cart-row-remove"
          onclick="removeFromCart(${id})"
          aria-label="Remove ${item.name}">x</button>
      </div>
    </li>
  `).join('');

  el.innerHTML = `
    <ul class="cart-list">${rows}</ul>
    <div class="cart-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    <button class="btn-checkout" onclick="checkout()">Proceed to checkout</button>
  `;

  renderOrderCards();
}

function checkout() {
  cart = {};
  updateCartUI();
  showToast("Order placed! Ready in ~5 min.");
}

// ORDER PAGE
function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function renderOrderCards() {
  ['espresso', 'cold', 'food'].forEach(cat => {
    const el = document.getElementById('order' + cap(cat));
    if (!el) return;

    el.innerHTML = orderCats[cat].map(id => {
      const item = menuData.find(m => m.id === id);
      if (!item) return '';
      const qty = cart[id] ? cart[id].qty : 0;
      return `
        <div class="order-card ${qty > 0 ? 'selected' : ''}" id="ocard-${id}">
          <div class="order-card-emoji">${item.emoji}</div>
          <div style="flex:1">
            <div class="order-card-name">${item.name}</div>
            <div class="order-card-price">$${item.price.toFixed(2)}</div>
            <div class="order-card-qty">
              <button class="qty-btn"
                onclick="orderQty(${item.id},'${item.name}','${item.emoji}',${item.price},-1)">−</button>
              <span class="qty-val" id="qty-${item.id}">${qty}</span>
              <button class="qty-btn"
                onclick="orderQty(${item.id},'${item.name}','${item.emoji}',${item.price},1)">+</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  });
}

function orderQty(id, name, emoji, price, delta) {
  if (delta > 0) {
    addToCart(id, name, emoji, price);
  } else {
    changeQty(id, delta);
  }
  renderOrderCards();
}

function selectOrderType(type) {
  document.querySelectorAll('.order-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + type).classList.add('active');
}
// CONTACT PAGE
function handleContact(e) {
  e.preventDefault();
  showToast("Message sent! We'll reply within 24 hours.");
  e.target.reset();
}
renderMenu();
renderOrderCards();
updateCartUI();
