// Safe LocalStorage Wrapper
function getSafeStorage(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    try {
      return JSON.parse(item);
    } catch (e) {
      return item || defaultValue;
    }
  } catch (e) {
    console.warn("LocalStorage access denied (likely due to file:// protocol). Using default value.");
    return defaultValue;
  }
}

function setSafeStorage(key, value) {
  try {
    const valStr = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, valStr);
  } catch (e) {
    console.warn("LocalStorage access denied.");
  }
}

function getSafeSessionStorage(key, defaultValue) {
  try {
    const item = sessionStorage.getItem(key);
    return item !== null ? item : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setSafeSessionStorage(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {}
}

// State Management
window.store = {
  cart: getSafeStorage('luna_cart', []),
  wishlist: getSafeStorage('luna_wishlist', []),
  theme: getSafeStorage('luna_theme', 'light'),
  products: [
  {
    "id": "1",
    "name": "Luna Earring 1",
    "category": "Earrings",
    "price": 435.56,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqitV6XEwNc4obmAzslt9pGhfIK8DjuayFdeSR",
    "rating": 4.8,
    "bestseller": true,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "2",
    "name": "Luna Earring 2",
    "category": "Earrings",
    "price": 287.91,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq6N7iXVaSK3oml7D6HiwdG54Tnft9EkxyNZVj",
    "rating": 4.4,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "3",
    "name": "Luna Earring 3",
    "category": "Earrings",
    "price": 443.43,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqdyPmtgJrDHGzf7vBosYX8MW9cpNgk3OuRnFA",
    "rating": 4.1,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "4",
    "name": "Luna Earring 4",
    "category": "Earrings",
    "price": 455.4,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq78KAac2LqlF1NER45BpGbHhes68K0wj7ndf9",
    "rating": 4.3,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "5",
    "name": "Luna Earring 5",
    "category": "Earrings",
    "price": 439.56,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqAp05Za8SeHwpK60XQ8RsO5xPhIYCWzB7qTcm",
    "rating": 4.5,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "6",
    "name": "Luna Earring 6",
    "category": "Earrings",
    "price": 159.4,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqNnLQ1oIedDFtJQenCj36Xcw85KUaBsxM4ZEz",
    "rating": 4.8,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "7",
    "name": "Luna Earring 7",
    "category": "Earrings",
    "price": 213.76,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq0uPix4VU5aulgToKzAPGDOrJ3bS1wjEC78eI",
    "rating": 4.0,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Earrings collection."
  },
  {
    "id": "8",
    "name": "Luna Necklace 1",
    "category": "Necklaces",
    "price": 245.18,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqL3YvSk00ponaXOdrEfKbc782CgiNDTsYw4hl",
    "rating": 4.9,
    "bestseller": true,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "9",
    "name": "Luna Necklace 2",
    "category": "Necklaces",
    "price": 465.8,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqHvDbgn8NWxk5QMT8qmKJCiDSvrP3ghfjXsZo",
    "rating": 4.0,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "10",
    "name": "Luna Necklace 3",
    "category": "Necklaces",
    "price": 74.19,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq4inCNp3kibRS6ZsCgu5FvtWcXhOmHKTf2PJl",
    "rating": 4.7,
    "bestseller": true,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "11",
    "name": "Luna Necklace 4",
    "category": "Necklaces",
    "price": 186.55,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqbjLnBaimoPfCY9KagJrVnOFAtp57DGERiLhH",
    "rating": 4.7,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "12",
    "name": "Luna Necklace 5",
    "category": "Necklaces",
    "price": 273.36,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqftjVt8hW5eMIFL2TXl7dCyi1nUPBtO38kv4Q",
    "rating": 4.6,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "13",
    "name": "Luna Necklace 6",
    "category": "Necklaces",
    "price": 113.42,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqjBDS29b1MnVRGbFv8PslhZJSOfDtco4k6BWu",
    "rating": 4.5,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "14",
    "name": "Luna Necklace 7",
    "category": "Necklaces",
    "price": 220.66,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqZ6TtGLOPMsdOo1cyemFv8K3zbpqNXWJaQ79k",
    "rating": 4.7,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "15",
    "name": "Luna Necklace 8",
    "category": "Necklaces",
    "price": 455.71,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqNn2P8nPedDFtJQenCj36Xcw85KUaBsxM4ZEz",
    "rating": 4.8,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Necklaces collection."
  },
  {
    "id": "16",
    "name": "Luna Ring 1",
    "category": "Rings",
    "price": 316.11,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq8Nqrc6s0GbPji7192ACswTmfQ8uU6FyIahJW",
    "rating": 4.1,
    "bestseller": true,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "17",
    "name": "Luna Ring 2",
    "category": "Rings",
    "price": 470.48,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqwLu2A59TZDa7jGic0gCOWNm95oUJzflnH3KL",
    "rating": 4.1,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "18",
    "name": "Luna Ring 3",
    "category": "Rings",
    "price": 241.74,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqDd32emgnlVHAjkwho31eTMO4cu0UImLt9iaW",
    "rating": 5.0,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "19",
    "name": "Luna Ring 4",
    "category": "Rings",
    "price": 389.65,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqUnsF6zRkeGQ7mtg8JEoyaXh1RI9uWLHwB0Ms",
    "rating": 4.8,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "20",
    "name": "Luna Ring 5",
    "category": "Rings",
    "price": 206.68,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq1QdBPUjPWDljrednSwyXHIgUqKQFu2GOpoCi",
    "rating": 4.7,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "21",
    "name": "Luna Ring 6",
    "category": "Rings",
    "price": 233.12,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq5bCheAF1o5qui7rMpZSmhAcv2tfQ49aL0lRT",
    "rating": 4.6,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "22",
    "name": "Luna Ring 7",
    "category": "Rings",
    "price": 492.69,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq5Dkkru1o5qui7rMpZSmhAcv2tfQ49aL0lRTP",
    "rating": 4.7,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "23",
    "name": "Luna Ring 8",
    "category": "Rings",
    "price": 382.74,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqhgW6QjtZKDCqy7zFrvX5GiucQkeE1xwI4JUf",
    "rating": 4.6,
    "bestseller": true,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "24",
    "name": "Luna Ring 9",
    "category": "Rings",
    "price": 219.15,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqT7MmLaZ8i4kzxrVlS6ZpYnodAJv2gNeuwhcy",
    "rating": 4.2,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Rings collection."
  },
  {
    "id": "25",
    "name": "Luna Watch 1",
    "category": "Watches",
    "price": 102.07,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqVSceeOzTIh2l0srQixq6BbgvNGd9kWOHSoYw",
    "rating": 4.1,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Watches collection."
  },
  {
    "id": "26",
    "name": "Luna Watch 2",
    "category": "Watches",
    "price": 324.27,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq52OP3C1o5qui7rMpZSmhAcv2tfQ49aL0lRTP",
    "rating": 4.0,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Watches collection."
  },
  {
    "id": "27",
    "name": "Luna Watch 3",
    "category": "Watches",
    "price": 339.09,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqDayN4rgnlVHAjkwho31eTMO4cu0UImLt9iaW",
    "rating": 4.8,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Watches collection."
  },
  {
    "id": "28",
    "name": "Luna Watch 4",
    "category": "Watches",
    "price": 169.84,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqgUh5eeMotwYQqSAU69710bCXOyfIuLnJcvMj",
    "rating": 4.5,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Watches collection."
  },
  {
    "id": "29",
    "name": "Luna Watch 5",
    "category": "Watches",
    "price": 464.38,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqRdjrqophsQ4BHmpTMCzkbOSXGDZx26vV831o",
    "rating": 4.6,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Watches collection."
  },
  {
    "id": "30",
    "name": "Luna Handbag 1",
    "category": "Handbags",
    "price": 351.14,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq9TFnTGXFYNPRzr4S6yJE8ua0doDZBnGAhceK",
    "rating": 4.4,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Handbags collection."
  },
  {
    "id": "31",
    "name": "Luna Handbag 2",
    "category": "Handbags",
    "price": 94.69,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqGUVmtHF7xFCNHRI5vudXn82csPlVLakjZtQr",
    "rating": 4.2,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Handbags collection."
  },
  {
    "id": "32",
    "name": "Luna Handbag 3",
    "category": "Handbags",
    "price": 384.95,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqp3MmtOKoYC4y1TKmHauNbSijPZwgFAM2c8dt",
    "rating": 4.4,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Handbags collection."
  },
  {
    "id": "33",
    "name": "Luna Handbag 4",
    "category": "Handbags",
    "price": 83.6,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq7zo4hF2LqlF1NER45BpGbHhes68K0wj7ndf9",
    "rating": 4.1,
    "bestseller": false,
    "newArrival": false,
    "description": "An exquisite luxury piece from our Handbags collection."
  },
  {
    "id": "34",
    "name": "Luna Handbag 5",
    "category": "Handbags",
    "price": 339.85,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqZpBaYtOPMsdOo1cyemFv8K3zbpqNXWJaQ79k",
    "rating": 4.5,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Handbags collection."
  },
  {
    "id": "35",
    "name": "Luna Bracelet 1",
    "category": "Bracelets",
    "price": 72.72,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqVRcRKStzTIh2l0srQixq6BbgvNGd9kWOHSoY",
    "rating": 4.1,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Bracelets collection."
  },
  {
    "id": "36",
    "name": "Luna Bracelet 2",
    "category": "Bracelets",
    "price": 418.43,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq6N2kgWuSK3oml7D6HiwdG54Tnft9EkxyNZVj",
    "rating": 4.0,
    "bestseller": false,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Bracelets collection."
  },
  {
    "id": "37",
    "name": "Luna Bracelet 3",
    "category": "Bracelets",
    "price": 231.85,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqjqS7JWb1MnVRGbFv8PslhZJSOfDtco4k6BWu",
    "rating": 4.8,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Bracelets collection."
  },
  {
    "id": "38",
    "name": "Luna Bracelet 4",
    "category": "Bracelets",
    "price": 448.88,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqd6k974HJrDHGzf7vBosYX8MW9cpNgk3OuRnF",
    "rating": 4.6,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Bracelets collection."
  },
  {
    "id": "39",
    "name": "Luna Bracelet 5",
    "category": "Bracelets",
    "price": 209.48,
    "image": "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqXMaOS56BfOxkT4nAu10WaPpDUZLYR8H357zN",
    "rating": 4.5,
    "bestseller": true,
    "newArrival": true,
    "description": "An exquisite luxury piece from our Bracelets collection."
  }
]
};

// Initialize Theme
window.initTheme = function() {
  if (store.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

window.toggleTheme = function() {
  store.theme = store.theme === 'light' ? 'dark' : 'light';
  setSafeStorage('luna_theme', store.theme);
  window.initTheme();
};

// Fetch Products
window.fetchProducts = async function() {
  try {
    const res = await fetch('/products.json');
    if (res.ok) {
      const data = await res.json();
      window.store.products = data;
      return data;
    }
  } catch(e) {
    console.warn("Could not fetch products.json, falling back to local store.");
  }
  return window.store.products;
};

// Cart Functions
window.addToCart = function(productId, quantity = 1) {
  const existing = store.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    store.cart.push({ id: productId, quantity });
  }
  window.saveCart();
  window.updateCartCount();
};

window.removeFromCart = function(productId) {
  store.cart = store.cart.filter(item => item.id !== productId);
  window.saveCart();
  window.updateCartCount();
  if (typeof window.renderCart === 'function') {
    window.renderCart(); // If on cart page
  }
};

window.saveCart = function() {
  setSafeStorage('luna_cart', store.cart);
};

window.updateCartCount = function() {
  const count = store.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  });
};

// Wishlist Functions
window.toggleWishlist = function(productId) {
  const index = store.wishlist.indexOf(productId);
  if (index > -1) {
    store.wishlist.splice(index, 1);
  } else {
    store.wishlist.push(productId);
  }
  setSafeStorage('luna_wishlist', store.wishlist);
  window.updateWishlistCount();
};

window.updateWishlistCount = function() {
  const count = store.wishlist.length;
  const badges = document.querySelectorAll('.wishlist-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  });
};

// Shared UI Setup
window.setupSharedUI = function() {
  if (!getSafeSessionStorage('luna_visited', false)) {
    setSafeSessionStorage('luna_visited', 'true');
    const path = window.location.pathname;
    if (!path.endsWith('index.html') && !path.endsWith('/')) {
      window.location.href = 'index.html';
      return;
    }
  }

  if (!getSafeSessionStorage('luna_intro_played', false)) {
    setSafeSessionStorage('luna_intro_played', 'true');
    const intro = document.createElement('div');
    intro.id = 'luna-intro';
    intro.className = 'fixed inset-0 z-[9999] bg-luxury-white dark:bg-luxury-black flex flex-col items-center justify-center transition-opacity duration-1000';
    intro.innerHTML = `
      <div class="relative w-screen h-screen overflow-hidden">
        <img src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqwFqZLLJ9TZDa7jGic0gCOWNm95oUJzflnH3K" alt="Luna Intro" class="w-full h-full object-cover">
      </div>
    `;
    document.body.appendChild(intro);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      intro.classList.add('opacity-0');
      setTimeout(() => {
        intro.remove();
        document.body.style.overflow = '';
      }, 1000);
    }, 2000);
  }

  window.renderHeaderAndFooter();
  window.initTheme();
  window.updateCartCount();
  window.updateWishlistCount();

  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      window.toggleTheme();
    });
  });
};

window.renderHeaderAndFooter = function() {
  const headerHtml = `
    <nav class="fixed w-full z-50 bg-luxury-white/90 dark:bg-luxury-black/90 backdrop-blur-md border-b border-luxury-gray dark:border-luxury-darkGray transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0 flex items-center">
            <a href="index.html" class="font-serif text-3xl font-bold tracking-wider text-luxury-black dark:text-luxury-gold">LUNA</a>
          </div>
          <div class="hidden md:flex space-x-8 items-center">
            <a href="index.html" class="hover:text-luxury-gold transition-colors">Home</a>
            <a href="shop.html" class="hover:text-luxury-gold transition-colors">Shop</a>
            <a href="about.html" class="hover:text-luxury-gold transition-colors">About Us</a>
            <a href="contact.html" class="hover:text-luxury-gold transition-colors">Contact</a>
          </div>
          <div class="flex items-center space-x-6">
            <button class="theme-toggle hover:text-luxury-gold transition-colors" aria-label="Toggle Dark Mode">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </button>
            <a href="wishlist.html" class="relative hover:text-luxury-gold transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span class="wishlist-count absolute -top-2 -right-2 bg-luxury-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center hidden">0</span>
            </a>
            <a href="checkout.html" class="relative hover:text-luxury-gold transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span class="cart-count absolute -top-2 -right-2 bg-luxury-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center hidden">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const footerHtml = `
    <footer class="bg-luxury-black text-luxury-white dark:bg-[#0a0a0a] pt-20 pb-10 border-t border-luxury-darkGray mt-24">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <a href="index.html" class="font-serif text-3xl font-bold text-luxury-gold mb-6 block">LUNA</a>
          <p class="text-luxury-gray text-sm leading-relaxed">Elevating everyday elegance with meticulously crafted luxury accessories for the modern aesthetic.</p>
        </div>
        <div>
          <h4 class="font-bold mb-6 tracking-wider uppercase text-sm">Shop</h4>
          <ul class="space-y-4 text-luxury-gray text-sm">
            <li><a href="shop.html" class="hover:text-luxury-gold transition-colors">All Products</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 tracking-wider uppercase text-sm">Help</h4>
          <ul class="space-y-4 text-luxury-gray text-sm">
            <li><a href="contact.html" class="hover:text-luxury-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 border-t border-luxury-darkGray pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-luxury-gray">
        <p>&copy; 2026 Luna Accessories. All rights reserved.</p>
      </div>
    </footer>
    <a href="https://wa.me/1234567890" target="_blank" class="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors z-50 transform hover:scale-110">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  `;

  const headerDiv = document.getElementById('app-header');
  if (headerDiv) headerDiv.innerHTML = headerHtml;
  
  const footerDiv = document.getElementById('app-footer');
  if (footerDiv) footerDiv.innerHTML = footerHtml;
};
