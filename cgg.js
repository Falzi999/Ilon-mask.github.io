// script.js
const balanceElement = document.getElementById('balance');
const productsElement = document.getElementById('products');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');

let balance = 7000000000; // 7 миллиардов долларов

// Пример данных товаров (200 товаров)
const products = [
    { name: "Tesla Model S", price: 80000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Вилла в Майами", price: 25000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "iPhone 15 Pro Max", price: 1200, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Часы Rolex", price: 15000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Яхта Sunseeker", price: 5000000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Частный остров", price: 10000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "MacBook Pro 16", price: 2500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Ferrari 488 GTB", price: 300000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотой слиток", price: 60000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Пентхаус в Нью-Йорке", price: 15000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "DJI Mavic 3", price: 2000, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Bugatti Chiron", price: 3000000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Алмазное колье", price: 500000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Замок во Франции", price: 20000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Sony PlayStation 5", price: 500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Lamborghini Aventador", price: 400000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Картина Ван Гога", price: 10000000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Офис в Лондоне", price: 12000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Samsung 85 QLED TV", price: 3000, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Porsche 911 Turbo S", price: 200000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовые серьги", price: 250000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Ферма в Калифорнии", price: 8000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Nikon Z9", price: 5500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Aston Martin DB11", price: 220000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотой Rolex", price: 50000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Остров в Карибском море", price: 30000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Apple Watch Ultra", price: 800, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "McLaren 720S", price: 300000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Кольцо с изумрудом", price: 75000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Пентхаус в Дубае", price: 18000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Dyson Purifier", price: 700, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Rolls-Royce Phantom", price: 450000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотая цепь", price: 10000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Виноградник в Италии", price: 7000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "iPad Pro 12.9", price: 1100, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Mercedes-Benz G-Class", price: 150000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовый браслет", price: 300000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Беверли-Хиллз", price: 35000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Sony WH-1000XM5", price: 400, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Audi R8", price: 180000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотые часы Patek Philippe", price: 100000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Коттедж в Швейцарии", price: 5000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Xbox Series X", price: 500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "BMW M8", price: 130000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Кольцо с сапфиром", price: 45000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Пентхаус в Токио", price: 22000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "LG OLED C2", price: 2500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Jaguar F-Type", price: 90000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотой кулон", price: 20000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Вилла на Бали", price: 6000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Samsung Galaxy Z Fold 4", price: 1800, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Lexus LC 500", price: 100000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовые запонки", price: 15000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Париже", price: 28000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "GoPro Hero 11", price: 500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Ford Mustang GT", price: 60000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотая печатка", price: 12000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Ферма в Австралии", price: 9000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Apple AirPods Max", price: 550, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Chevrolet Corvette", price: 80000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовое кольцо", price: 60000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Пентхаус в Гонконге", price: 30000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "DJI Mini 3 Pro", price: 800, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Dodge Challenger", price: 70000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотой браслет", price: 30000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Лос-Анджелесе", price: 40000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Sony A7 IV", price: 2500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Volvo XC90", price: 70000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовые серьги", price: 40000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Вилла в Испании", price: 12000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Microsoft Surface Laptop 5", price: 1500, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Toyota Supra", price: 50000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотая цепочка", price: 15000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Майами", price: 35000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Sony WH-1000XM4", price: 350, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Honda Civic Type R", price: 40000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовый кулон", price: 50000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Ферма в Канаде", price: 6000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Apple Mac Studio", price: 2000, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Subaru WRX STI", price: 45000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотые часы", price: 25000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Лондоне", price: 28000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Samsung Galaxy S23 Ultra", price: 1200, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Mazda MX-5", price: 35000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовое колье", price: 80000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Вилла в Греции", price: 10000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Apple HomePod", price: 300, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Nissan GT-R", price: 120000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотой перстень", price: 18000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Нью-Йорке", price: 40000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Sony PS VR2", price: 600, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Kia Stinger", price: 50000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовые серьги", price: 35000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Ферма в Новой Зеландии", price: 7000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Apple iPad Air", price: 600, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Hyundai Genesis", price: 60000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотая цепочка", price: 12000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Сан-Франциско", price: 30000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Samsung Galaxy Tab S8", price: 700, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Volkswagen Golf GTI", price: 40000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Бриллиантовый браслет", price: 45000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Вилла в Португалии", price: 8000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Apple MacBook Air", price: 1000, category: "tech", image: "https://via.placeholder.com/200" },
    { name: "Jeep Wrangler", price: 50000, category: "cars", image: "https://via.placeholder.com/200" },
    { name: "Золотые часы", price: 30000, category: "luxury", image: "https://via.placeholder.com/200" },
    { name: "Особняк в Чикаго", price: 25000000, category: "real-estate", image: "https://via.placeholder.com/200" },
    { name: "Sony WH-CH720N", price: 200, category: "tech", image: "https://via.placeholder.com/200" },
];

// Отображение товаров
function renderProducts(filteredProducts) {
  productsElement.innerHTML = '';
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Цена: $${product.price.toLocaleString()}</p>
      <button onclick="buyProduct(${product.price})">Купить</button>
    `;
    productsElement.appendChild(productElement);
  });
}

// Покупка товара
function buyProduct(price) {
  if (balance >= price) {
    balance -= price;
    balanceElement.textContent = `$${balance.toLocaleString()}`;
    alert(`Вы купили товар за $${price.toLocaleString()}!`);
  } else {
    alert('Недостаточно средств!');
  }
}

// Фильтрация товаров
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filteredProducts);
}

// Инициализация
searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);
renderProducts(products);