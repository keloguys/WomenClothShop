document.addEventListener('DOMContentLoaded', function () {
    // Функция для генерации отзывов
    function generateReviews() {
        const reviews = [];
        for (let i = 0; i < 5; i++) {
            reviews.push({
                user: `Пользователь ${i + 1}`,
                rating: Math.floor(Math.random() * 5) + 1, // Рейтинг от 1 до 5
                text: `Отличный товар! Очень доволен покупкой. ${i + 1}`,
                image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${i}.jpg` // Рандомное изображение пользователя
            });
        }
        return reviews;
    }

    const products = [
        // Куртки
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            name: `Куртка "Зимний Ветер ${i + 1}"`,
            price: 3000 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["S", "M", "L", "XL"][i % 4],
            sizeOptions: ["S", "M", "L", "XL"],
            category: "jackets",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://i.pinimg.com/originals/7c/f1/3c/7cf13c64097e3264a65f4d7be3b6e73f.jpg",
                white: "https://fashionhot.club/uploads/posts/2022-11/1668829275_13-fashionhot-club-p-belaya-kurtka-zhenskaya-14.jpg",
                red: "https://i.pinimg.com/originals/2a/9a/ac/2a9aac0902c85e6a10fe01563d01705b.jpg",
                blue: "https://a.lmcdn.ru/product/O/O/OO001EWNBS28_3928527_1_v2.jpg",
                green: "https://www.fashionware.ru/i/pics/articles/quilted-jackets/River%20Island%20Quilted%20Jacket.jpg"
            },
            description: "Стильная куртка для любого сезона.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Кроссовки
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 21,
            name: `Кроссовки "Бегун ${i + 1}"`,
            price: 2500 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["39", "40", "41", "42", "43"][i % 5],
            sizeOptions: ["39", "40", "41", "42", "43"],
            category: "sneakers",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://gagaru.club/uploads/posts/2023-02/1677032480_gagaru-club-p-stilnie-krossovki-chernie-zhenskie-krasivo-24.jpg",
                white: "https://cdn1.ozone.ru/s3/multimedia-q/6367654058.jpg",
                red: "https://img.joomcdn.net/e5d52c8606a781deea23e17cd0d504011dcb337b_original.jpeg",
                blue: "https://sun9-8.userapi.com/impf/c836729/v836729925/5e00e/l9P1FyvScto.jpg?size=320x408&quality=96&sign=f453732ef32ad591669f648ca5022c62&c_uniq_tag=Fn6R3wEv5n-XlKlyXKpAqAzQA6TeysWGj0fVRSiENv4&type=album",
                green: "https://gagaru.club/uploads/posts/2023-02/1676979413_gagaru-club-p-yarko-zelenie-krossovki-oboi-90.jpg"
            },
            description: "Удобные и модные кроссовки.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Рубашки
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 41,
            name: `Рубашка "Офисный Стиль ${i + 1}"`,
            price: 1500 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["S", "M", "L", "XL"][i % 4],
            sizeOptions: ["S", "M", "L", "XL"],
            category: "shirts",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://cdn1.ozone.ru/s3/multimedia-a/6652198234.jpg",
                white: "https://mig.pics/uploads/posts/2022-07/1657055874_6-mykaleidoscope-ru-p-stilnie-belie-rubashki-zhenskie-devushka-k-7.jpg",
                red: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-16/080/047/845/283/40/100053236703b0.jpg",
                blue: "https://gagaru.club/uploads/posts/2023-02/1677030137_gagaru-club-p-yarko-sinyaya-zhenskaya-rubashka-pinterest-17.jpg",
                green: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/787/808/564/127/104/9/100065387549b0.jpg"
            },
            description: "Классическая рубашка для офиса.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Джинсы
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 61,
            name: `Джинсы "Классика ${i + 1}"`,
            price: 2000 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["28", "30", "32", "34", "36"][i % 5],
            sizeOptions: ["28", "30", "32", "34", "36"],
            category: "jeans",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://fotogranat.ru/wp-content/uploads/2023/12/chernye-dzhinsy-zhenskie-18.webp",
                white: "https://shophelp.ru/uploads/images/topic/2023/07/25/10b7526204_1000.jpg",
                red: "https://img.ostin.com/upload/mdm/media_content/resize/6c7/767_1062_9a39/20456230299.jpg",
                blue: "https://i.pinimg.com/originals/b3/0a/4f/b30a4fc7c4319f38473854ca810385c5.jpg",
                green: "https://cdn.4stand.com/huge/8d/af/8daf35702dbb06e7617227e6a16d060c64cff532.jpg"
            },
            description: "Классические джинсы для любого случая.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Платья
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 81,
            name: `Платье "Вечерний Шарм ${i + 1}"`,
            price: 3500 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["XS", "S", "M", "L", "XL"][i % 5],
            sizeOptions: ["XS", "S", "M", "L", "XL"],
            category: "dresses",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://garnil.club/uploads/posts/2023-03/1679031305_garnil-club-p-obuv-pod-kokteilnoe-plate-zhenskie-krasivo-37.jpg",
                white: "https://cdn1.ozone.ru/s3/multimedia-j/6826595383.jpg",
                red: "https://www.rastl.ru/sites/default/files/products/2021-05/2021-05-15-19-0251_Krasnyy_odin-1.jpeg",
                blue: "https://cdn1.ozone.ru/s3/multimedia-7/6496517119.jpg",
                green: "https://open-pro.ru/upload/product/267/100821/importexel-16285774189d629521e8.jpg"
            },
            description: "Элегантное платье для вечера.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Футболки
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 101,
            name: `Футболка "Летний Бриз ${i + 1}"`,
            price: 1000 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["S", "M", "L", "XL"][i % 4],
            sizeOptions: ["S", "M", "L", "XL"],
            category: "t-shirts",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://printbar.ru/upload/images/af/afe2009.jpg",
                white: "https://budomaster.ru/upload/iblock/622/w4pzgzd1e6nmelf9jmfi540brcdxvdmk/futbolka-zhenskaya-t-bolka-lady.jpg",
                red: "https://a.lmcdn.ru/product/M/P/MP002XW1GBLE_10506645_1_v1.jpeg",
                blue: "https://cdn1.ozone.ru/s3/multimedia-e/6344527250.jpg",
                green: "https://cdn1.ozone.ru/multimedia/1018235006.jpg"
            },
            description: "Стильная футболка для лета.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Рюкзаки
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 121,
            name: `Рюкзак "Городской Стиль ${i + 1}"`,
            price: 4000 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["One Size"],
            sizeOptions: ["One Size"],
            category: "backpacks",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://cs5.livemaster.ru/storage/27/1f/e749d4104df129c67b1fcff6deov--sumki-i-aksessuary-kozhanyj-ryukzachok-sumochka-2-v-1-mops-s1.jpg",
                white: "https://i.pinimg.com/originals/d4/c9/41/d4c941507b3c27e69102c7a2b3231afc.jpg",
                red: "https://cdn2.static1-sima-land.com/items/2054416/1/700-nw.jpg",
                blue: "https://bagpoint.ru/wa-data/public/shop/products/39/12/1239/images/44355/44355.1500.jpg",
                green: "https://cs5.livemaster.ru/storage/96/1d/66542925df915edd05642b19852n--sumki-i-aksessuary-kozhanyj-ryukzak-vester-zelenogo-tsveta.jpg"
            },
            description: "Стильный рюкзак для города.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        })),
        // Штаны
        ...Array.from({ length: 20 }, (_, i) => ({
            id: i + 141,
            name: `Штаны "Уличный Лук ${i + 1}"`,
            price: 2200 + i * 100,
            color: ["black", "white", "red", "blue", "green"][i % 5],
            size: ["28", "30", "32", "34", "36"][i % 5],
            sizeOptions: ["28", "30", "32", "34", "36"],
            category: "pants",
            style: ["casual", "sport", "home", "elegant"][i % 4],
            images: {
                black: "https://mig.pics/uploads/posts/2021-11/1636755219_100-mykaleidoscope-ru-p-shtani-s-rezinkoi-vnizu-zhenskie-devushka-104.jpg",
                white: "https://cdn1.ozone.ru/multimedia/1033028048.jpg",
                red: "https://cdn1.ozone.ru/s3/multimedia-5/6008471921.jpg",
                blue: "https://prokedi.ru/content/img/66/bryuki-linu-75847_4169505.jpg",
                green: "https://a.lmcdn.ru/product/M/P/MP002XW0DGXB_9322220_1_v4.jpeg"
            },
            description: "Удобные штаны для улицы.",
            stock: Math.floor(Math.random() * 10) + 1, // Рандомное количество товара в наличии
            reviews: generateReviews() // Добавляем отзывы
        }))
    ];
    localStorage.setItem('products', JSON.stringify(products));

    // Функция для расчета среднего рейтинга
    function calculateAverageRating(reviews) {
        if (reviews.length === 0) return 0;
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1);
    }

    // Отрисовка товаров в каталоге
    function renderProducts(filteredProducts) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const averageRating = calculateAverageRating(product.reviews);
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.images[product.color]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Цена: ${product.price} руб.</p>
                <p>В наличии: ${product.stock} шт.</p>
                <div class="star-rating">
                    ${'★'.repeat(Math.round(averageRating))}${'☆'.repeat(5 - Math.round(averageRating))}
                    <span class="rating-value">(${averageRating})</span>
                </div>
                <button onclick="addToCart(${product.id})">Добавить в корзину</button>
                <button onclick="window.location.href='product.html?id=${product.id}'">Подробнее</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Функция для генерации отзывов
    function generateReviews() {
        const reviews = [];
        for (let i = 0; i < 5; i++) {
            reviews.push({
                user: `Пользователь ${i + 1}`,
                rating: Math.floor(Math.random() * 5) + 1, // Рейтинг от 1 до 5
                text: `Отличный товар! Очень доволен покупкой. ${i + 1}`,
                image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${i}.jpg` // Рандомное изображение пользователя
            });
        }
        return reviews;
    }

    

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cart.find(p => p.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            showModal(`Товар "${product.name}" добавлен в корзину!`);
            updateCartCount();
        }
    };

    function showModal(message) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(modal);

        modal.style.display = 'block';

        modal.querySelector('.close').onclick = function() {
            modal.style.display = 'none';
            modal.remove();
        };

        setTimeout(() => {
            modal.style.display = 'none';
            modal.remove();
        }, 3000);
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    updateCartCount();

    const productGrid = document.getElementById('productGrid');
    const priceRange = document.getElementById('priceRange');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const colorFilter = document.getElementById('colorFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const styleFilter = document.getElementById('styleFilter');
    const applyFiltersButton = document.getElementById('applyFilters');
    const resetFiltersButton = document.getElementById('resetFilters');

    noUiSlider.create(priceRange, {
        start: [0, 5000],
        connect: true,
        range: {
            'min': 0,
            'max': 5000
        }
    });

    priceRange.noUiSlider.on('update', function (values) {
        priceMin.textContent = Math.round(values[0]);
        priceMax.textContent = Math.round(values[1]);
    });

    const sizesByCategory = {
        jackets: ["S", "M", "L", "XL"],
        sneakers: ["39", "40", "41", "42", "43"],
        shirts: ["S", "M", "L", "XL"],
        jeans: ["28", "30", "32", "34", "36"],
        dresses: ["XS", "S", "M", "L", "XL"],
        "t-shirts": ["S", "M", "L", "XL"],
        backpacks: ["One Size"],
        pants: ["28", "30", "32", "34", "36"]
    };

    function updateSizes(category) {
        const sizes = sizesByCategory[category] || [];
        sizeFilter.innerHTML = '<option value="all">Все размеры</option>';
        sizes.forEach(size => {
            sizeFilter.innerHTML += `<option value="${size}">${size}</option>`;
        });
    }

    categoryFilter.addEventListener('change', function () {
        const selectedCategory = this.value;
        updateSizes(selectedCategory);
    });

    applyFiltersButton.addEventListener('click', applyFilters);
    resetFiltersButton.addEventListener('click', resetFilters);

    function resetFilters() {
        priceRange.noUiSlider.set([0, 5000]);
        colorFilter.value = "all";
        sizeFilter.value = "all";
        categoryFilter.value = "all";
        styleFilter.value = "all";
        applyFilters();
    }

    function applyFilters() {
        const priceValues = priceRange.noUiSlider.get();
        const minPrice = parseInt(priceValues[0]);
        const maxPrice = parseInt(priceValues[1]);
        const selectedColor = colorFilter.value;
        const selectedSize = sizeFilter.value;
        const selectedCategory = categoryFilter.value;
        const selectedStyle = styleFilter.value;

        const filteredProducts = products.filter(product => {
            return product.price >= minPrice &&
                   product.price <= maxPrice &&
                   (selectedColor === 'all' || product.color === selectedColor) &&
                   (selectedSize === 'all' || product.size === selectedSize) &&
                   (selectedCategory === 'all' || product.category === selectedCategory) &&
                   (selectedStyle === 'all' || product.style === selectedStyle);
        });

        renderProducts(filteredProducts);
    }

    function renderProducts(filteredProducts) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.images[product.color]}" alt="${product.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 5px;">
                <h3>${product.name}</h3>
                <p>Цена: ${product.price} руб.</p>
                <p>Размер: ${product.size}</p>
                <p>В наличии: ${product.stock} шт.</p>
                <div class="star-rating">
                    ★★★★☆ <!-- Статичный рейтинг (4 звезды из 5) -->
                    <span class="rating-value">(4.0)</span> <!-- Статичное значение рейтинга -->
                </div>
                <button onclick="addToCart(${product.id})">Добавить в корзину</button>
                <button onclick="window.location.href='product.html?id=${product.id}'">Подробнее</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    updateSizes(categoryFilter.value);
    renderProducts(products);

    
});
document.getElementById('applyFilters').addEventListener('click', function() {
    this.classList.add('animate__pulse');
    setTimeout(() => {
        this.classList.remove('animate__pulse');
    }, 500); // Длительность анимации
});

document.getElementById('resetFilters').addEventListener('click', function() {
    this.classList.add('animate__pulse');
    setTimeout(() => {
        this.classList.remove('animate__pulse');
    }, 500); // Длительность анимации
});