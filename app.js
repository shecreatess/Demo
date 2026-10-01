/* =========================================================
   PEPSI CONCEPT STORE
   APP.JS
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

  /* =========================
     DRINKS
  ========================== */

  {
    id: "drink-1",
    category: "drinks",
    name: "Lemon Electric",
    price: 2800,
    type: "drink",
    image: "assets/lemon-electric.svg",
    description:
      "A bright lemon-forward Pepsi concept with a sharp citrus kick and a crisp finish.",
    ingredients:
      "Carbonated water, lemon flavour, caramel colour, citric acid, caffeine, sweetener.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml concept can. Best served ice cold.",
    colour: "#d9e900"
  },

  {
    id: "drink-2",
    category: "drinks",
    name: "Mango Heatwave",
    price: 3000,
    type: "drink",
    image: "assets/mango-heatwave.svg",
    description:
      "Tropical mango energy meets classic Pepsi-style cola fizz.",
    ingredients:
      "Carbonated water, mango flavour, cola flavour, caramel colour, citric acid, caffeine.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml concept can with a tropical mango profile.",
    colour: "#ff8a00"
  },

  {
    id: "drink-3",
    category: "drinks",
    name: "Cherry Tokyo",
    price: 3200,
    type: "drink",
    image: "assets/cherry-tokyo.svg",
    description:
      "Sweet cherry, electric fizz and a futuristic Tokyo-inspired flavour profile.",
    ingredients:
      "Carbonated water, cherry flavour, cola flavour, caramel colour, citric acid, caffeine.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml limited concept can.",
    colour: "#e40046"
  },

  {
    id: "drink-4",
    category: "drinks",
    name: "Berry Velvet",
    price: 3100,
    type: "drink",
    image: "assets/berry-velvet.svg",
    description:
      "A dark berry concept combining blackberry, raspberry and cola notes.",
    ingredients:
      "Carbonated water, berry flavours, cola flavour, caramel colour, citric acid.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml concept can.",
    colour: "#9d2cff"
  },

  {
    id: "drink-5",
    category: "drinks",
    name: "Pineapple Rush",
    price: 2900,
    type: "drink",
    image: "assets/pineapple-rush.svg",
    description:
      "Juicy pineapple with a fizzy tropical finish.",
    ingredients:
      "Carbonated water, pineapple flavour, cola flavour, citric acid, caffeine.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml tropical concept can.",
    colour: "#f6c900"
  },

  {
    id: "drink-6",
    category: "drinks",
    name: "Peach Afterglow",
    price: 3000,
    type: "drink",
    image: "assets/peach-afterglow.svg",
    description:
      "Soft peach sweetness balanced with a sparkling cola finish.",
    ingredients:
      "Carbonated water, peach flavour, cola flavour, caramel colour, citric acid.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml concept can.",
    colour: "#ff9c78"
  },

  {
    id: "drink-7",
    category: "drinks",
    name: "Watermelon Pop",
    price: 2900,
    type: "drink",
    image: "assets/watermelon-pop.svg",
    description:
      "Fresh watermelon flavour with a playful fizzy finish.",
    ingredients:
      "Carbonated water, watermelon flavour, cola flavour, citric acid, sweetener.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml summer concept can.",
    colour: "#ff477e"
  },

  {
    id: "drink-8",
    category: "drinks",
    name: "Passion Fizz",
    price: 3100,
    type: "drink",
    image: "assets/passion-fizz.svg",
    description:
      "Passion fruit tang meets dark cola fizz.",
    ingredients:
      "Carbonated water, passion fruit flavour, cola flavour, citric acid, caffeine.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml tropical concept can.",
    colour: "#ff5b00"
  },

  {
    id: "drink-9",
    category: "drinks",
    name: "Coconut Night",
    price: 3300,
    type: "drink",
    image: "assets/coconut-night.svg",
    description:
      "Creamy coconut-inspired notes wrapped in a darker cola profile.",
    ingredients:
      "Carbonated water, coconut flavour, cola flavour, caramel colour, caffeine.",
    allergens:
      "Contains coconut flavouring.",
    details:
      "330ml after-dark concept can.",
    colour: "#1e263c"
  },

  {
    id: "drink-10",
    category: "drinks",
    name: "Apple Spark",
    price: 2900,
    type: "drink",
    image: "assets/apple-spark.svg",
    description:
      "Crisp green apple flavour with bright carbonation.",
    ingredients:
      "Carbonated water, green apple flavour, citric acid, cola flavour.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml concept can.",
    colour: "#61c900"
  },

  {
    id: "drink-11",
    category: "drinks",
    name: "Strawberry Cream",
    price: 3200,
    type: "drink",
    image: "assets/strawberry-cream.svg",
    description:
      "Strawberry sweetness with a smooth dessert-inspired finish.",
    ingredients:
      "Carbonated water, strawberry flavour, vanilla flavour, citric acid.",
    allergens:
      "Cream-inspired flavour concept. Not a confirmed dairy product.",
    details:
      "330ml dessert-inspired concept can.",
    colour: "#ff6c9c"
  },

  {
    id: "drink-12",
    category: "drinks",
    name: "Grape Galaxy",
    price: 3100,
    type: "drink",
    image: "assets/grape-galaxy.svg",
    description:
      "Dark grape flavour with a bold cosmic-inspired finish.",
    ingredients:
      "Carbonated water, grape flavour, cola flavour, citric acid, caffeine.",
    allergens:
      "No major allergens declared for this fictional concept.",
    details:
      "330ml cosmic concept can.",
    colour: "#702cff"
  },


  /* =========================
     FOOD
  ========================== */

  {
    id: "food-1",
    category: "food",
    name: "Midnight Smash Burger",
    price: 8500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=88",
    description:
      "Double smashed beef patties, melted cheese, pickles and house sauce.",
    ingredients:
      "Beef, brioche bun, cheddar cheese, lettuce, pickles, onions and house sauce.",
    allergens:
      "Contains wheat, milk and egg.",
    details:
      "Served with seasoned fries."
  },

  {
    id: "food-2",
    category: "food",
    name: "Pepperoni Fire Pizza",
    price: 9500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=88",
    description:
      "Classic pizza loaded with pepperoni, mozzarella and spicy tomato sauce.",
    ingredients:
      "Wheat flour, tomato sauce, mozzarella, pepperoni, herbs and chilli.",
    allergens:
      "Contains wheat and milk.",
    details:
      "12-inch concept pizza."
  },

  {
    id: "food-3",
    category: "food",
    name: "Blue Cheese Loaded Fries",
    price: 6000,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=88",
    description:
      "Crispy fries topped with creamy blue cheese sauce and herbs.",
    ingredients:
      "Potatoes, blue cheese, cream, herbs and seasoning.",
    allergens:
      "Contains milk.",
    details:
      "Loaded fries portion."
  },

  {
    id: "food-4",
    category: "food",
    name: "Crispy Cola BBQ Wings",
    price: 7500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=88",
    description:
      "Crispy chicken wings finished with a sweet smoky BBQ glaze.",
    ingredients:
      "Chicken wings, BBQ sauce, spices and herbs.",
    allergens:
      "May contain soy and gluten depending on sauce.",
    details:
      "Eight-piece wings serving."
  },

  {
    id: "food-5",
    category: "food",
    name: "Green Room Vegan Bowl",
    price: 7000,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=88",
    description:
      "Fresh vegetables, grains, avocado and a bright citrus dressing.",
    ingredients:
      "Mixed greens, quinoa, avocado, cucumber, tomato, chickpeas and citrus dressing.",
    allergens:
      "May contain sesame depending on dressing.",
    details:
      "Plant-based bowl."
  },

  {
    id: "food-6",
    category: "food",
    name: "Street Taco Trio",
    price: 6500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=88",
    description:
      "Three loaded street-style tacos with fresh toppings.",
    ingredients:
      "Corn tortillas, seasoned protein, cabbage, salsa, onions and coriander.",
    allergens:
      "Ingredients vary by selected filling.",
    details:
      "Three-taco serving."
  },

  {
    id: "food-7",
    category: "food",
    name: "Creamy Garlic Pasta",
    price: 8000,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=88",
    description:
      "Creamy garlic pasta with parmesan and fresh herbs.",
    ingredients:
      "Pasta, cream, garlic, parmesan, butter and herbs.",
    allergens:
      "Contains wheat and milk.",
    details:
      "Creamy pasta bowl."
  },

  {
    id: "food-8",
    category: "food",
    name: "Strawberry Cloud",
    price: 4500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=88",
    description:
      "A sweet strawberry dessert made for the soft-life section of the menu.",
    ingredients:
      "Strawberry, cream, pastry and sugar.",
    allergens:
      "Contains milk and wheat.",
    details:
      "Dessert portion."
  },

  {
    id: "food-9",
    category: "food",
    name: "Crispy Chicken Box",
    price: 8000,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=88",
    description:
      "Crunchy fried chicken with seasoned sides.",
    ingredients:
      "Chicken, wheat coating, spices, potatoes and seasoning.",
    allergens:
      "Contains wheat.",
    details:
      "Chicken box with fries."
  },

  {
    id: "food-10",
    category: "food",
    name: "Rainbow Power Salad",
    price: 6500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=88",
    description:
      "Colourful vegetables, greens and fresh toppings.",
    ingredients:
      "Mixed greens, tomato, cucumber, carrots, peppers, corn and dressing.",
    allergens:
      "Dressing may contain sesame.",
    details:
      "Fresh vegetable salad."
  },

  {
    id: "food-11",
    category: "food",
    name: "Grilled Chicken Melt",
    price: 7500,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=88",
    description:
      "Grilled chicken, melted cheese and fresh vegetables in toasted bread.",
    ingredients:
      "Chicken, bread, cheese, lettuce, tomato and sauce.",
    allergens:
      "Contains wheat and milk.",
    details:
      "Toasted chicken sandwich."
  },

  {
    id: "food-12",
    category: "food",
    name: "Tokyo Crunch Roll",
    price: 9000,
    type: "food",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=88",
    description:
      "A colourful sushi-inspired roll with fresh fillings and crunchy toppings.",
    ingredients:
      "Sushi rice, nori, vegetables, protein filling and sesame.",
    allergens:
      "May contain fish, soy and sesame.",
    details:
      "Eight-piece sushi-inspired serving."
  },


  /* =========================
     FASHION
  ========================== */

  {
    id: "fashion-1",
    category: "fashion",
    name: "Pepsi Afterdark Hoodie",
    price: 45000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1556821840-3f9ab962d6a7?auto=format&fit=crop&w=1000&q=88",
    description:
      "Oversized streetwear hoodie inspired by Pepsi after dark.",
    ingredients:
      "Cotton-blend fictional concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Oversized fit. Available XS–XXL."
  },

  {
    id: "fashion-2",
    category: "fashion",
    name: "Electric Blue Track Jacket",
    price: 52000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1000&q=88",
    description:
      "Sport-inspired electric blue track jacket.",
    ingredients:
      "Synthetic performance fabric concept.",
    allergens:
      "No food allergens.",
    details:
      "Relaxed fit. Available XS–XXL."
  },

  {
    id: "fashion-3",
    category: "fashion",
    name: "Pepsi Studio Tee",
    price: 25000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=88",
    description:
      "Minimal studio-inspired Pepsi concept tee.",
    ingredients:
      "Cotton concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Unisex fit. Available XS–XXL."
  },

  {
    id: "fashion-4",
    category: "fashion",
    name: "Cherry Red Racing Tee",
    price: 28000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=88",
    description:
      "Bold red racing-inspired graphic tee.",
    ingredients:
      "Cotton-blend concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Relaxed fit. Available XS–XXL."
  },

  {
    id: "fashion-5",
    category: "fashion",
    name: "Midnight Cargo Joggers",
    price: 42000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=88",
    description:
      "Relaxed cargo joggers built for an after-hours streetwear look.",
    ingredients:
      "Cotton-blend concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Relaxed fit. Available XS–XXL."
  },

  {
    id: "fashion-6",
    category: "fashion",
    name: "Blue Signal Shorts",
    price: 30000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1562886877-7d8c0d6f7c4c?auto=format&fit=crop&w=1000&q=88",
    description:
      "Sporty blue shorts with a clean modern silhouette.",
    ingredients:
      "Performance fabric concept.",
    allergens:
      "No food allergens.",
    details:
      "Relaxed fit. Available XS–XXL."
  },

  {
    id: "fashion-7",
    category: "fashion",
    name: "Pepsi Varsity Bomber",
    price: 58000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=88",
    description:
      "Classic varsity-inspired bomber with a Pepsi concept treatment.",
    ingredients:
      "Polyester-blend concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Relaxed fit. Available XS–XXL."
  },

  {
    id: "fashion-8",
    category: "fashion",
    name: "Citrus Club Tank",
    price: 22000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=88",
    description:
      "Minimal tank top inspired by the Lemon Electric concept.",
    ingredients:
      "Cotton concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Fitted silhouette. Available XS–XXL."
  },

  {
    id: "fashion-9",
    category: "fashion",
    name: "Pepsi Denim Overshirt",
    price: 50000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=88",
    description:
      "Structured denim overshirt for layered streetwear looks.",
    ingredients:
      "Denim concept garment.",
    allergens:
      "No food allergens.",
    details:
      "Oversized fit. Available XS–XXL."
  },

  {
    id: "fashion-10",
    category: "fashion",
    name: "Blue Wave Windbreaker",
    price: 55000,
    type: "fashion",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=88",
    description:
      "Lightweight blue windbreaker inspired by the Pepsi wave.",
    ingredients:
      "Lightweight synthetic fabric concept.",
    allergens:
      "No food allergens.",
    details:
      "Relaxed fit. Available XS–XXL."
  },


  /* =========================
     ACCESSORIES
  ========================== */

  {
    id: "accessory-1",
    category: "accessories",
    name: "Pepsi Orbit Key Tag",
    price: 9000,
    type: "accessory",
    emoji: "🔑",
    description:
      "A small Pepsi-inspired orbit key tag.",
    ingredients:
      "Metal and acrylic concept accessory.",
    allergens:
      "Not applicable.",
    details:
      "Compact everyday key accessory."
  },

  {
    id: "accessory-2",
    category: "accessories",
    name: "Blue Wave Cap",
    price: 18000,
    type: "accessory",
    emoji: "🧢",
    description:
      "Classic blue cap with a fictional Pepsi concept treatment.",
    ingredients:
      "Cotton concept accessory.",
    allergens:
      "Not applicable.",
    details:
      "Adjustable strap."
  },

  {
    id: "accessory-3",
    category: "accessories",
    name: "Pepsi Mini Tote",
    price: 22000,
    type: "accessory",
    emoji: "👜",
    description:
      "Compact everyday tote inspired by the Pepsi colour system.",
    ingredients:
      "Cotton canvas concept accessory.",
    allergens:
      "Not applicable.",
    details:
      "Mini everyday tote."
  },

  {
    id: "accessory-4",
    category: "accessories",
    name: "Night Shift Socks",
    price: 10000,
    type: "accessory",
    emoji: "🧦",
    description:
      "Dark streetwear socks with blue and red detailing.",
    ingredients:
      "Cotton-blend concept accessory.",
    allergens:
      "Not applicable.",
    details:
      "One-size concept design."
  },

  {
    id: "accessory-5",
    category: "accessories",
    name: "Citrus Phone Case",
    price: 15000,
    type: "accessory",
    emoji: "📱",
    description:
      "Bright citrus-inspired phone case.",
    ingredients:
      "Protective polymer concept case.",
    allergens:
      "Not applicable.",
    details:
      "Concept accessory. Phone model selection would be added in production."
  },

  {
    id: "accessory-6",
    category: "accessories",
    name: "Pepsi Travel Flask",
    price: 28000,
    type: "accessory",
    emoji: "🥤",
    description:
      "Reusable travel flask with a fictional Pepsi concept finish.",
    ingredients:
      "Stainless steel concept flask.",
    allergens:
      "Not applicable.",
    details:
      "Reusable insulated bottle."
  },

  {
    id: "accessory-7",
    category: "accessories",
    name: "Cherry Lanyard",
    price: 8500,
    type: "accessory",
    emoji: "🎟️",
    description:
      "Cherry Tokyo-inspired lanyard for everyday carry.",
    ingredients:
      "Polyester fabric concept accessory.",
    allergens:
      "Not applicable.",
    details:
      "Adjustable neck lanyard."
  },

  {
    id: "accessory-8",
    category: "accessories",
    name: "Blue Orbit Sunglasses",
    price: 24000,
    type: "accessory",
    emoji: "🕶️",
    description:
      "Statement sunglasses with an electric blue finish.",
    ingredients:
      "Acrylic and metal concept accessory.",
    allergens:
      "Not applicable.",
    details:
      "Fashion accessory concept."
  }

];


/* =========================================================
   STATE
========================================================= */

let cart = [];

let selectedProduct = null;

let selectedSize = "M";


/* =========================================================
   DOM
========================================================= */

const welcomeScreen =
  document.getElementById("welcomeScreen");

const storeApp =
  document.getElementById("storeApp");

const enterStoreBtn =
  document.getElementById("enterStoreBtn");

const drinkGrid =
  document.getElementById("drinkGrid");

const foodGrid =
  document.getElementById("foodGrid");

const fashionGrid =
  document.getElementById("fashionGrid");

const accessoriesGrid =
  document.getElementById("accessoriesGrid");

const productModal =
  document.getElementById("productModal");

const closeProductModal =
  document.getElementById("closeProductModal");

const modalImage =
  document.getElementById("modalImage");

const modalCategory =
  document.getElementById("modalCategory");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalPrice =
  document.getElementById("modalPrice");

const modalIngredients =
  document.getElementById("modalIngredients");

const modalAllergens =
  document.getElementById("modalAllergens");

const modalDetails =
  document.getElementById("modalDetails");

const modalAddBtn =
  document.getElementById("modalAddBtn");

const sizeSelector =
  document.getElementById("sizeSelector");

const cartDrawer =
  document.getElementById("cartDrawer");

const cartBackdrop =
  document.getElementById("cartBackdrop");

const cartItems =
  document.getElementById("cartItems");

const cartCount =
  document.getElementById("cartCount");

const cartTotal =
  document.getElementById("cartTotal");

const cartBtn =
  document.getElementById("cartBtn");

const finalCartBtn =
  document.getElementById("finalCartBtn");

const closeCartBtn =
  document.getElementById("closeCartBtn");

const toast =
  document.getElementById("toast");

const searchBtn =
  document.getElementById("searchBtn");

const searchPanel =
  document.getElementById("searchPanel");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");

const closeSearchBtn =
  document.getElementById("closeSearchBtn");

const pairingBtn =
  document.getElementById("pairingBtn");

const pairingResult =
  document.getElementById("pairingResult");

const randomProductBtn =
  document.getElementById("randomProductBtn");

const checkoutBtn =
  document.getElementById("checkoutBtn");


/* =========================================================
   PRICE FORMAT
========================================================= */

function formatPrice(price) {

  return new Intl.NumberFormat(
    "en-NG",
    {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }
  ).format(price);

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

  const card =
    document.createElement("article");

  card.className =
    `product-card ${product.type}-card`;

  card.dataset.id =
    product.id;


  let visualHTML = "";


  /* DRINK */

  if (product.type === "drink") {

    visualHTML = `

      <div
        class="product-visual"
        style="
          background:
          radial-gradient(
            circle at 50% 35%,
            ${product.colour}55,
            transparent 45%
          ),
          #eef3ff;
        "
      >

        <span class="product-tag">
          CONCEPT
        </span>

        <div
          class="mini-can"
          style="
            background:
            linear-gradient(
              145deg,
              #0035ad,
              ${product.colour},
              #00134e
            );
          "
        >

          <div class="mini-can-logo">
            PEPSI
          </div>

          <div class="mini-can-flavour">
            ${escapeHTML(product.name)}
          </div>

        </div>

      </div>

    `;

  }


  /* FOOD */

  else if (product.type === "food") {

    visualHTML = `

      <div class="product-visual">

        <span class="product-tag">
          FOOD
        </span>

        <img
          class="food-photo"
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        />

      </div>

    `;

  }


  /* FASHION */

  else if (product.type === "fashion") {

    visualHTML = `

      <div class="fashion-visual">

        <span class="product-tag">
          PEPSI WEAR
        </span>

        <img
          class="fashion-image"
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        />

      </div>

    `;

  }


  /* ACCESSORIES */

  else {

    visualHTML = `

      <div class="product-visual accessory-visual">

        <span class="product-tag">
          ACCESSORY
        </span>

        <div class="accessory-object">
          ${product.emoji}
        </div>

      </div>

    `;

  }


  card.innerHTML = `

    ${visualHTML}

    <div class="product-info">

      <h3>
        ${escapeHTML(product.name)}
      </h3>

      <div class="product-meta">

        <span>
          ${getCategoryLabel(product.category)}
        </span>

        <strong class="product-price">
          ${formatPrice(product.price)}
        </strong>

      </div>

    </div>

  `;


  card.addEventListener(
    "click",
    () => openProduct(product)
  );


  return card;

}


/* =========================================================
   CATEGORY LABEL
========================================================= */

function getCategoryLabel(category) {

  const labels = {

    drinks: "DRINK",
    food: "FOOD",
    fashion: "FASHION",
    accessories: "ACCESSORY"

  };

  return labels[category] || category;

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

  drinkGrid.innerHTML = "";
  foodGrid.innerHTML = "";
  fashionGrid.innerHTML = "";
  accessoriesGrid.innerHTML = "";


  products
    .filter(product => product.category === "drinks")
    .forEach(product => {

      drinkGrid.appendChild(
        createProductCard(product)
      );

    });


  products
    .filter(product => product.category === "food")
    .forEach(product => {

      foodGrid.appendChild(
        createProductCard(product)
      );

    });


  products
    .filter(product => product.category === "fashion")
    .forEach(product => {

      fashionGrid.appendChild(
        createProductCard(product)
      );

    });


  products
    .filter(product => product.category === "accessories")
    .forEach(product => {

      accessoriesGrid.appendChild(
        createProductCard(product)
      );

    });

}


/* =========================================================
   OPEN PRODUCT
========================================================= */

function openProduct(product) {

  selectedProduct = product;

  selectedSize = "M";


  modalCategory.textContent =
    getCategoryLabel(product.category);

  modalTitle.textContent =
    product.name;

  modalDescription.textContent =
    product.description;

  modalPrice.textContent =
    formatPrice(product.price);

  modalIngredients.textContent =
    product.ingredients;

  modalAllergens.textContent =
    product.allergens;

  modalDetails.textContent =
    product.details;


  renderModalImage(product);


  if (product.type === "fashion") {

    sizeSelector.classList.remove("hidden");

    document
      .querySelectorAll(".sizes button")
      .forEach(button => {

        button.classList.remove("active");

        if (
          button.dataset.size === "M"
        ) {

          button.classList.add("active");

        }

      });

  } else {

    sizeSelector.classList.add("hidden");

  }


  productModal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   MODAL IMAGE
========================================================= */

function renderModalImage(product) {

  modalImage.innerHTML = "";


  if (product.type === "drink") {

    modalImage.innerHTML = `

      <div
        class="mini-can"
        style="
          width:180px;
          height:370px;
          background:
          linear-gradient(
            145deg,
            #0035ad,
            ${product.colour},
            #00134e
          );
        "
      >

        <div
          class="mini-can-logo"
          style="margin-top:70px;font-size:18px;"
        >
          PEPSI
        </div>

        <div
          class="mini-can-flavour"
          style="font-size:23px;"
        >
          ${escapeHTML(product.name)}
        </div>

      </div>

    `;

  }


  else if (
    product.type === "food" ||
    product.type === "fashion"
  ) {

    modalImage.innerHTML = `

      <img
        class="${
          product.type === "food"
            ? "food-photo"
            : "fashion-image"
        }"
        src="${product.image}"
        alt="${escapeHTML(product.name)}"
      />

    `;

  }


  else {

    modalImage.innerHTML = `

      <div
        style="
          font-size:130px;
        "
      >
        ${product.emoji}
      </div>

    `;

  }

}


/* =========================================================
   CLOSE PRODUCT MODAL
========================================================= */

function closeProduct() {

  productModal.classList.add("hidden");

  document.body.style.overflow = "";

  selectedProduct = null;

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(product, size = null) {

  const existingItem =
    cart.find(item =>
      item.id === product.id &&
      item.size === size
    );


  if (existingItem) {

    existingItem.quantity += 1;

  }

  else {

    cart.push({

      id: product.id,

      name: product.name,

      price: product.price,

      image: product.image || null,

      emoji: product.emoji || null,

      type: product.type,

      size: size,

      quantity: 1

    });

  }


  updateCart();

  showToast(
    `${product.name} added to bag`
  );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

  renderCart();

  const totalQuantity =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  cartCount.textContent =
    totalQuantity;


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  cartTotal.textContent =
    formatPrice(total);

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

  if (!cart.length) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        <div>
          🛍️
        </div>

        <p>
          Your bag is empty.
        </p>

        <span>
          Add something you love.
        </span>

      </div>

    `;

    return;

  }


  cartItems.innerHTML = "";


  cart.forEach((item, index) => {

    const itemElement =
      document.createElement("div");

    itemElement.className =
      "cart-item";


    let imageHTML = "";


    if (item.image) {

      imageHTML = `

        <img
          src="${item.image}"
          alt="${escapeHTML(item.name)}"
        />

      `;

    }

    else {

      imageHTML = `

        <div
          style="font-size:32px;"
        >
          ${item.emoji || "🥤"}
        </div>

      `;

    }


    itemElement.innerHTML = `

      <div class="cart-item-image">

        ${imageHTML}

      </div>


      <div>

        <h4>
          ${escapeHTML(item.name)}
        </h4>

        <p>
          ${item.size
            ? `Size: ${item.size} · `
            : ""
          }

          Qty: ${item.quantity}
        </p>

        <button
          class="remove-item"
          data-index="${index}"
        >
          REMOVE
        </button>

      </div>


      <strong class="cart-item-price">

        ${formatPrice(
          item.price * item.quantity
        )}

      </strong>

    `;


    cartItems.appendChild(itemElement);

  });


  document
    .querySelectorAll(".remove-item")
    .forEach(button => {

      button.addEventListener(
        "click",
        event => {

          const index =
            Number(
              event.currentTarget
                .dataset
                .index
            );

          cart.splice(index, 1);

          updateCart();

          showToast(
            "Item removed"
          );

        }
      );

    });

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

  cartDrawer.classList.add("open");

  cartBackdrop.classList.add("show");

  document.body.style.overflow = "hidden";

}


function closeCart() {

  cartDrawer.classList.remove("open");

  cartBackdrop.classList.remove("show");

  document.body.style.overflow = "";

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

  toast.textContent =
    message;

  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove("show");

      },
      2200
    );

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

  searchPanel.classList.remove("hidden");

  searchInput.focus();

}


function closeSearch() {

  searchPanel.classList.add("hidden");

  searchInput.value = "";

  searchResults.innerHTML = "";

}


function searchProducts(query) {

  const search =
    query
      .trim()
      .toLowerCase();


  if (!search) {

    searchResults.innerHTML = "";

    return;

  }


  const matches =
    products.filter(product => {

      return (

        product.name
          .toLowerCase()
          .includes(search)

        ||

        product.category
          .toLowerCase()
          .includes(search)

        ||

        product.description
          .toLowerCase()
          .includes(search)

      );

    });


  if (!matches.length) {

    searchResults.innerHTML = `

      <p
        style="
          padding:20px;
          color:#888;
          font-size:12px;
        "
      >
        No products found.
      </p>

    `;

    return;

  }


  searchResults.innerHTML = "";


  matches
    .slice(0, 8)
    .forEach(product => {

      const result =
        document.createElement("div");

      result.className =
        "search-result";


      result.innerHTML = `

        <div>

          <h4>
            ${escapeHTML(product.name)}
          </h4>

          <span>
            ${getCategoryLabel(
              product.category
            )}
          </span>

        </div>

        <strong>
          ${formatPrice(product.price)}
        </strong>

      `;


      result.addEventListener(
        "click",
        () => {

          closeSearch();

          openProduct(product);

        }
      );


      searchResults.appendChild(result);

    });

}


/* =========================================================
   PAIRING GENERATOR
========================================================= */

function generatePairing() {

  const drinks =
    products.filter(
      product =>
        product.category === "drinks"
    );


  const foods =
    products.filter(
      product =>
        product.category === "food"
    );


  const drink =
    drinks[
      Math.floor(
        Math.random() *
        drinks.length
      )
    ];


  const food =
    foods[
      Math.floor(
        Math.random() *
        foods.length
      )
    ];


  pairingResult.innerHTML = `

    <div class="pairing-card">

      <p
        style="
          font-size:10px;
          letter-spacing:.15em;
          font-weight:800;
        "
      >
        YOUR RANDOM PAIRING
      </p>

      <h3>
        ${escapeHTML(food.name)}
      </h3>

      <p>
        +
      </p>

      <h3>
        ${escapeHTML(drink.name)}
      </h3>

      <p>
        ${escapeHTML(
          drink.description
        )}
      </p>

    </div>

  `;

}


/* =========================================================
   RANDOM PRODUCT
========================================================= */

function surpriseMe() {

  const random =
    products[
      Math.floor(
        Math.random() *
        products.length
      )
    ];


  openProduct(random);

}


/* =========================================================
   SCROLL BUTTONS
========================================================= */

function scrollToSection(id) {

  const element =
    document.getElementById(id);


  if (!element) return;


  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   EVENT LISTENERS
========================================================= */


/* ENTER STORE */

enterStoreBtn.addEventListener(
  "click",
  () => {

    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.pointerEvents = "none";

    setTimeout(() => {

      welcomeScreen.classList.add("hidden");

      storeApp.classList.remove("hidden");

    }, 450);

  }
);


/* PRODUCT MODAL */

closeProductModal.addEventListener(
  "click",
  closeProduct
);


productModal.addEventListener(
  "click",
  event => {

    if (
      event.target === productModal
    ) {

      closeProduct();

    }

  }
);


/* ADD TO BAG FROM MODAL */

modalAddBtn.addEventListener(
  "click",
  () => {

    if (!selectedProduct) return;


    const size =
      selectedProduct.type === "fashion"
        ? selectedSize
        : null;


    addToCart(
      selectedProduct,
      size
    );


    closeProduct();

  }
);


/* SIZE BUTTONS */

document
  .querySelectorAll(".sizes button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectedSize =
          button.dataset.size;


        document
          .querySelectorAll(".sizes button")
          .forEach(sizeButton => {

            sizeButton.classList.remove(
              "active"
            );

          });


        button.classList.add("active");

      }
    );

  });


/* CART */

cartBtn.addEventListener(
  "click",
  openCart
);


finalCartBtn.addEventListener(
  "click",
  openCart
);


closeCartBtn.addEventListener(
  "click",
  closeCart
);


cartBackdrop.addEventListener(
  "click",
  closeCart
);


/* SEARCH */

searchBtn.addEventListener(
  "click",
  openSearch
);


closeSearchBtn.addEventListener(
  "click",
  closeSearch
);


searchInput.addEventListener(
  "input",
  event => {

    searchProducts(
      event.target.value
    );

  }
);


/* PAIRING */

pairingBtn.addEventListener(
  "click",
  generatePairing
);


/* SURPRISE ME */

randomProductBtn.addEventListener(
  "click",
  surpriseMe
);


/* NAVIGATION */

document
  .querySelectorAll(
    "[data-scroll]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        scrollToSection(
          button.dataset.scroll
        );

      }
    );

  });


/* HOME */

document
  .getElementById("homeBtn")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


/* CHECKOUT */

checkoutBtn.addEventListener(
  "click",
  () => {

    if (!cart.length) {

      showToast(
        "Your bag is empty"
      );

      return;

    }


    showToast(
      "Demo checkout — coming soon!"
    );

  }
);


/* ESC KEY */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeProduct();

      closeCart();

      closeSearch();

    }

  }
);


/* =========================================================
   INITIALISE
========================================================= */

renderProducts();

updateCart();
