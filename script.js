const products = [
    { id: 1, name: "ساعة ذكية برو", price: 1500, category: "إلكترونيات", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600" },
    { id: 2, name: "سماعات لاسلكية", price: 800, category: "صوتيات", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" },
    { id: 3, name: "نظارة شمسية", price: 450, category: "إكسسوارات", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600" },
    { id: 4, name: "كاميرا احترافية", price: 3200, category: "تصوير", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600" },
    { id: 5, name: "حذاء رياضي", price: 1200, category: "موضة", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" },
    { id: 6, name: "حقيبة جلدية", price: 950, category: "موضة", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600" },
    { id: 7, name: "ماكينة قهوة", price: 2800, category: "أجهزة", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600" },
    { id: 8, name: "عطر فاخر", price: 1800, category: "عطور", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600" }
];

let cart = [];

// توليد المنتجات في الصفحة بشكل جذاب
const productList = document.getElementById('product-list');
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <span class="category-tag">${product.category}</span>
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price} ج.م</p>
                    <button class="add-btn" onclick="addToCart(${product.id})">إضافة للسلة <i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    
    // تأثير بسيط عند الإضافة
    const btn = event.target;
    btn.innerHTML = "تمت الإضافة ✓";
    btn.style.background = "#10b981";
    setTimeout(() => {
        btn.innerHTML = 'إضافة للسلة <i class="fas fa-cart-plus"></i>';
        btn.style.background = "#1e293b";
    }, 1000);
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" width="50" style="border-radius:5px">
                <div>
                    <h4>${item.name}</h4>
                    <span>${item.price} ج.م</span>
                </div>
                <i class="fas fa-trash delete-icon" onclick="removeItem(${index})"></i>
            </div>
        `;
    });
    document.getElementById('cart-total').innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}

// تشغيل الدالة عند تحميل الصفحة
displayProducts();