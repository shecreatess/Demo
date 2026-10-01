const drinks = [

  {
    id:"d1",
    name:"Lemonade Rush",
    short:"Lemon + cola fizz",
    category:"Citrus",
    price:4200,
    bg:"#ffb4c3",
    accent:"#9d1230",
    ingredients:[
      "Pepsi cola base",
      "Fresh lemon",
      "Citrus oils",
      "Carbonated water"
    ],
    tag:"NEW",
    note:"Sharp, fizzy and bright."
  },

  {
    id:"d2",
    name:"Banana Cherry",
    short:"Banana + black cherry",
    category:"Fruit",
    price:4800,
    bg:"#ffd84d",
    accent:"#74113a",
    ingredients:[
      "Pepsi cola base",
      "Banana essence",
      "Black cherry",
      "Vanilla"
    ],
    tag:"ODD",
    note:"Dessert energy in a can."
  },

  {
    id:"d3",
    name:"Tokyo Yuzu",
    short:"Yuzu + cherry",
    category:"Global",
    price:5200,
    bg:"#dce8ff",
    accent:"#003dbb",
    ingredients:[
      "Pepsi cola base",
      "Yuzu",
      "Sour cherry",
      "Ginger"
    ],
    tag:"TOKYO",
    note:"Crisp, tart and electric."
  },

  {
    id:"d4",
    name:"Peach Pepper",
    short:"Peach + pink pepper",
    category:"Spice",
    price:5000,
    bg:"#ffc1a8",
    accent:"#8c2030",
    ingredients:[
      "Pepsi cola base",
      "White peach",
      "Pink peppercorn",
      "Lime"
    ],
    tag:"LIMITED",
    note:"Sweet first. Tiny kick after."
  },

  {
    id:"d5",
    name:"Suya Cola",
    short:"Smoky spice + cola",
    category:"Naija",
    price:4500,
    bg:"#8d221c",
    accent:"#ffd05b",
    ingredients:[
      "Pepsi cola base",
      "Smoked spice",
      "Ginger",
      "Clove"
    ],
    tag:"NAIJA",
    note:"A smoky cola concept inspired by suya nights."
  },

  {
    id:"d6",
    name:"Cucumber Mint",
    short:"Cool cucumber + mint",
    category:"Fresh",
    price:4300,
    bg:"#c8f1cf",
    accent:"#075d46",
    ingredients:[
      "Pepsi cola base",
      "Cucumber",
      "Mint",
      "Lime"
    ],
    tag:"FRESH",
    note:"Cold, clean and surprisingly crisp."
  },

  {
    id:"d7",
    name:"Pineapple Cream",
    short:"Pineapple + vanilla",
    category:"Tropical",
    price:4900,
    bg:"#ffd87a",
    accent:"#173f9a",
    ingredients:[
      "Pepsi cola base",
      "Pineapple",
      "Vanilla cream",
      "Lemon"
    ],
    tag:"TROPIC",
    note:"Creamy tropical fizz."
  },

  {
    id:"d8",
    name:"Strawberry Basil",
    short:"Strawberry + basil",
    category:"Herbal",
    price:4700,
    bg:"#ff9eaa",
    accent:"#551035",
    ingredients:[
      "Pepsi cola base",
      "Strawberry",
      "Basil",
      "Lime"
    ],
    tag:"BOTANIC",
    note:"A garden-party cola."
  },

  {
    id:"d9",
    name:"Mango Ginger",
    short:"Mango + ginger",
    category:"Tropical",
    price:4600,
    bg:"#ffb63d",
    accent:"#5b1b00",
    ingredients:[
      "Pepsi cola base",
      "Mango",
      "Fresh ginger",
      "Orange"
    ],
    tag:"TROPIC",
    note:"Juicy with a warm finish."
  },

  {
    id:"d10",
    name:"Midnight Plum",
    short:"Plum + vanilla",
    category:"Night",
    price:5400,
    bg:"#34255f",
    accent:"#ff9cb2",
    ingredients:[
      "Pepsi cola base",
      "Black plum",
      "Vanilla",
      "Berry"
    ],
    tag:"MIDNIGHT",
    note:"Dark fruit, soft vanilla, late-night mood."
  }

];


const wear = [

  {
    id:"w1",
    name:"Blue Hour Hoodie",
    type:"hoodie",
    price:32000,
    bg:"#07133c",
    note:"Oversized heavyweight fleece"
  },

  {
    id:"w2",
    name:"Cherry Cola Tee",
    type:"tee",
    price:18000,
    bg:"#ff3158",
    note:"Boxy cotton fit"
  },

  {
    id:"w3",
    name:"Signal Shorts",
    type:"short",
    price:22000,
    bg:"#004bff",
    note:"Nylon street shorts"
  },

  {
    id:"w4",
    name:"Play Joggers",
    type:"jogger",
    price:30000,
    bg:"#111111",
    note:"Relaxed utility joggers"
  },

  {
    id:"w5",
    name:"Pepsi Varsity Hoodie",
    type:"hoodie",
    price:36000,
    bg:"#8d221c",
    note:"Contrast sleeve concept"
  },

  {
    id:"w6",
    name:"Electric Logo Tee",
    type:"tee",
    price:17000,
    bg:"#ffd640",
    note:"Oversized graphic tee"
  },

  {
    id:"w7",
    name:"Weekend Shorts",
    type:"short",
    price:21000,
    bg:"#ff9cb2",
    note:"Lightweight lounge fit"
  },

  {
    id:"w8",
    name:"Midnight Joggers",
    type:"jogger",
    price:31000,
    bg:"#004bff",
    note:"Reflective logo details"
  }

];


const foods = [

  {
    id:"f1",
    name:"Vegan Fizz Burger",
    icon:"🍔",
    price:8500,
    kind:"Vegan",
    desc:"Plant-based patty, Pepsi BBQ glaze, lettuce and pickles."
  },

  {
    id:"f2",
    name:"Meat Lovers Cola Wings",
    icon:"🍗",
    price:12000,
    kind:"Meat",
    desc:"Crispy wings tossed in a sticky Pepsi cola glaze."
  },

  {
    id:"f3",
    name:"Cherry Heat Fries",
    icon:"🍟",
    price:7000,
    kind:"Sides",
    desc:"Crispy fries, cherry pepper sauce and smoky seasoning."
  },

  {
    id:"f4",
    name:"Yuzu Crunch Tacos",
    icon:"🌮",
    price:9800,
    kind:"Global",
    desc:"Crunchy tacos with citrus slaw and Pepsi-lime dressing."
  },

  {
    id:"f5",
    name:"Pepsi BBQ Pizza",
    icon:"🍕",
    price:11000,
    kind:"Meat",
    desc:"Mozzarella, smoky beef, onions and cola BBQ drizzle."
  },

  {
    id:"f6",
    name:"Tokyo Ramen",
    icon:"🍜",
    price:10500,
    kind:"Global",
    desc:"Miso broth, yuzu oil, noodles and a Pepsi-glazed mushroom."
  },

  {
    id:"f7",
    name:"Cola Churros",
    icon:"🍩",
    price:6500,
    kind:"Sweet",
    desc:"Cinnamon churros with a dark cola dipping sauce."
  },

  {
    id:"f8",
    name:"Tropical Sundae",
    icon:"🍨",
    price:7500,
    kind:"Sweet",
    desc:"Pineapple, mango, vanilla and fizzy cherry syrup."
  }

];


const extras = [

  {
    id:"x1",
    name:"Pepsi P Keyring",
    type:"keyring",
    price:6500,
    desc:"Chunky acrylic keyring with a floating P."
  },

  {
    id:"x2",
    name:"Blue Pop Cap",
    type:"cap",
    price:15000,
    desc:"Structured cap with embroidered Pepsi mark."
  },

  {
    id:"x3",
    name:"Cherry Gloss",
    type:"lipstick",
    price:9000,
    desc:"Cherry-tinted lip gloss concept."
  },

  {
    id:"x4",
    name:"Play Tote",
    type:"tote",
    price:18000,
    desc:"Oversized canvas tote for the whole drop."
  }

];


let cart = JSON.parse(
  localStorage.getItem("pepsiPlayCart") || "[]"
);

let activeDrinkFilter = "All";
let activeFoodFilter = "All";


const money = n =>
  `₦${n.toLocaleString("en-NG")}`;

const $ = s =>
  document.querySelector(s);

const $$ = s =>
  [...document.querySelectorAll(s)];


function toast(msg){

  const t = $("#toast");

  t.textContent = msg;

  t.classList.add("show");

  clearTimeout(window.__toast);

  window.__toast = setTimeout(
    () => t.classList.remove("show"),
    2200
  );

}


function saveCart(){

  localStorage.setItem(
    "pepsiPlayCart",
    JSON.stringify(cart)
  );

  renderCart();

}


function addToCart(item, qty = 1){

  const found =
    cart.find(x => x.id === item.id);

  if(found){

    found.qty += qty;

  }else{

    cart.push({
      ...item,
      qty
    });

  }

  saveCart();

  toast(
    `${item.name} added to basket`
  );

}


function removeFromCart(id){

  cart =
    cart.filter(
      x => x.id !== id
    );

  saveCart();

}


function renderCart(){

  $("#cartCount").textContent =
    cart.reduce(
      (s,x) => s + x.qty,
      0
    );

  $("#cartTotal").textContent =
    money(
      cart.reduce(
        (s,x) =>
          s + x.price * x.qty,
        0
      )
    );


  $("#cartItems").innerHTML =
    cart.length

      ?

      cart.map(
        x => `
          <div class="cart-item">

            <div
              class="cart-thumb"
              style="background:${x.bg || "#004bff"}"
            >
              ${x.icon || "P"}
            </div>

            <div>

              <h4>${x.name}</h4>

              <small>
                ${x.qty} × ${money(x.price)}
              </small>

            </div>

            <button
              onclick="removeFromCart('${x.id}')"
            >
              Remove
            </button>

          </div>
        `
      ).join("")

      :

      `
        <div
          style="
            padding:70px 10px;
            text-align:center;
            color:#777
          "
        >
          Your basket is empty.
          <br><br>
          Go make questionable flavour choices.
        </div>
      `;

}


function drinkArt(d, large = false){

  return `
    <div
      class="${large ? "detail-art" : "product-art"}"
      style="background:${d.bg}"
    >

      <span class="tag">
        ${d.tag}
      </span>

      <div
        class="mini-can"
        style="
          background:
            linear-gradient(
              100deg,
              ${d.accent},
              ${d.bg},
              ${d.accent}
            );

          width:${large ? 150 : 90}px;
          height:${large ? 300 : 180}px;
        "
      >

        <span
          class="pepsi-mark ${large ? "big" : ""}"
        ></span>

        <span
          style="
            margin-top:${large ? "65" : "45"}px
          "
        >
          PEPSI
        </span>

      </div>

    </div>
  `;

}


function renderDrinkFilters(){

  const cats = [
    "All",
    ...new Set(
      drinks.map(
        x => x.category
      )
    )
  ];


  $("#drinkFilters").innerHTML =
    cats.map(
      c => `
        <button
          class="${c === activeDrinkFilter ? "active" : ""}"
          data-filter="${c}"
        >
          ${c}
        </button>
      `
    ).join("");


  $$("#drinkFilters button")
    .forEach(
      b =>
        b.onclick = () => {

          activeDrinkFilter =
            b.dataset.filter;

          renderDrinkFilters();
          renderDrinks();

        }
    );

}


function renderDrinks(){

  const list =
    activeDrinkFilter === "All"
      ? drinks
      : drinks.filter(
          x =>
            x.category ===
            activeDrinkFilter
        );


  $("#drinkGrid").innerHTML =
    list.map(
      d => `
        <article
          class="product-card"
          onclick="openProduct('${d.id}')"
        >

          ${drinkArt(d)}

          <div class="product-meta">

            <h3>
              ${d.name}
            </h3>

            <p>
              ${d.short}
            </p>

            <div class="price">
              ${money(d.price)}
            </div>

          </div>

        </article>
      `
    ).join("");

}


function renderWear(){

  $("#wearGrid").innerHTML =
    wear.map(
      w => `
        <article
          class="wear-card"
          onclick="openProduct('${w.id}')"
          style="background:${w.bg}"
        >

          <p
            class="eyebrow"
            style="color:white"
          >
            PEPSI//PLAY
          </p>

          <div class="garment">
            <div class="${w.type}"></div>
          </div>

          <div class="wear-info">

            <div>

              <h3>
                ${w.name}
              </h3>

              <small>
                ${w.note}
              </small>

            </div>

            <strong>
              ${money(w.price)}
            </strong>

          </div>

        </article>
      `
    ).join("");

}


function renderFoodTabs(){

  const kinds = [
    "All",
    ...new Set(
      foods.map(
        x => x.kind
      )
    )
  ];


  $("#foodTabs").innerHTML =
    kinds.map(
      k => `
        <button
          class="${k === activeFoodFilter ? "active" : ""}"
          data-food="${k}"
        >
          ${k}
        </button>
      `
    ).join("");


  $$("#foodTabs button")
    .forEach(
      b =>
        b.onclick = () => {

          activeFoodFilter =
            b.dataset.food;

          renderFoodTabs();
          renderFood();

        }
    );

}


function renderFood(){

  const list =
    activeFoodFilter === "All"
      ? foods
      : foods.filter(
          x =>
            x.kind ===
            activeFoodFilter
        );


  const hero =
    list[0] || foods[0];


  $("#foodFeature").innerHTML = `

    <div>

      <p
        class="eyebrow"
        style="color:#ffd640"
      >
        TODAY'S PEPSI KITCHEN IDEA
      </p>

      <h3>
        ${hero.name}
      </h3>

      <p>
        ${hero.desc}
      </p>

      <button
        class="btn btn-light"
        onclick="openProduct('${hero.id}')"
      >
        Build a plate →
      </button>

    </div>

    <div
      style="
        font-size:170px;
        position:relative;
        z-index:1
      "
    >
      ${hero.icon}
    </div>

  `;


  $("#foodGrid").innerHTML =
    list
      .slice(1)
      .map(
        f => `
          <article
            class="food-card"
            onclick="openProduct('${f.id}')"
          >

            <div class="food-icon">
              ${f.icon}
            </div>

            <div>

              <h3>
                ${f.name}
              </h3>

              <p>
                ${f.desc}
              </p>

              <div class="price">
                ${money(f.price)}
              </div>

            </div>

          </article>
        `
      ).join("");

}


function renderExtras(){

  $("#extrasGrid").innerHTML =
    extras.map(
      x => `
        <article
          class="extra-card"
          onclick="openProduct('${x.id}')"
        >

          <div class="extra-visual">

            <div class="${x.type}"></div>

          </div>

          <h3>
            ${x.name}
          </h3>

          <p>
            ${x.desc}
          </p>

          <strong>
            ${money(x.price)}
          </strong>

        </article>
      `
    ).join("");

}


const allItems = () =>
  [
    ...drinks,
    ...wear,
    ...foods,
    ...extras
  ];


window.openProduct = function(id){

  const p =
    allItems().find(
      x => x.id === id
    );

  if(!p) return;


  let art = p.bg
    ? drinkArt(p,true)
    : `
      <div
        class="detail-art"
        style="
          background:${p.bg || "#ece8ff"}
        "
      >
        <div
          style="font-size:150px"
        >
          ${p.icon || "P"}
        </div>
      </div>
    `;


  if(p.type){

    art = `
      <div
        class="detail-art"
        style="
          background:${p.bg};
        "
      >

        <div
          class="${p.type}"
          style="transform:scale(1.5)"
        ></div>

      </div>
    `;

  }


  const extraText =
    p.ingredients

      ?

      `
        <h4>
          INGREDIENTS
        </h4>

        <p class="ingredients">
          ${p.ingredients.join(" · ")}
        </p>
      `

      :

      `
        <h4>
          DETAILS
        </h4>

        <p class="ingredients">
          ${p.desc || p.note}
        </p>
      `;


  $("#productDetail").innerHTML = `

    <div class="product-detail">

      ${art}

      <div class="detail-copy">

        <p class="eyebrow">
          PEPSI//PLAY PRODUCT DEMO
        </p>

        <h2>
          ${p.name}
        </h2>

        <p class="muted">
          ${p.short || p.note || p.desc || ""}
        </p>

        ${extraText}


        ${
          p.type === "hoodie" ||
          p.type === "tee" ||
          p.type === "jogger" ||
          p.type === "short"

          ?

          `
            <label>
              SIZE

              <select
                style="
                  display:block;
                  width:100%;
                  padding:12px;
                  margin-top:7px;
                  border-radius:12px;
                  border:1px solid var(--line)
                "
              >

                <option>XS</option>
                <option>S</option>
                <option selected>M</option>
                <option>L</option>
                <option>XL</option>

              </select>

            </label>
          `

          :

          ""
        }


        <div class="detail-actions">

          <div class="qty">

            <button id="qtyMinus">
              −
            </button>

            <b id="qtyNum">
              1
            </b>

            <button id="qtyPlus">
              +
            </button>

          </div>


          <button
            class="btn btn-dark"
            id="addDetail"
          >
            Add to basket · ${money(p.price)}
          </button>

        </div>

      </div>

    </div>

  `;


  let qty = 1;


  $("#qtyMinus").onclick = () => {

    qty =
      Math.max(
        1,
        qty - 1
      );

    $("#qtyNum").textContent =
      qty;

  };


  $("#qtyPlus").onclick = () => {

    qty++;

    $("#qtyNum").textContent =
      qty;

  };


  $("#addDetail").onclick = () => {

    addToCart(
      p,
      qty
    );

    $("#productDialog").close();

  };


  $("#productDialog").showModal();

};


function setupAuth(){

  $("#loginBtn").onclick =
    () =>
      $("#authDialog").showModal();


  $$(".auth-tabs button")
    .forEach(
      b =>
        b.onclick = () => {

          $$(".auth-tabs button")
            .forEach(
              x =>
                x.classList.remove("active")
            );

          b.classList.add("active");


          const login =
            b.dataset.auth === "login";


          $("#authTitle").textContent =
            login
              ? "Welcome back."
              : "Create your account.";


          $("#nameField").style.display =
            login
              ? "none"
              : "block";

        }
    );


  $("#authForm").onsubmit = e => {

    e.preventDefault();

    $("#authDialog").close();

    toast(
      "You're in. Welcome to PEPSI//PLAY ✦"
    );

    document
      .querySelector("#drinks")
      .scrollIntoView({
        behavior:"smooth"
      });

  };

}


function setupModals(){

  $$("[data-close]")
    .forEach(
      b =>
        b.onclick =
          () =>
            document
              .getElementById(
                b.dataset.close
              )
              .close()
    );


  $("#cartBtn").onclick =
    () =>
      $("#cartDrawer")
        .classList
        .add("open");


  $("#closeCart").onclick =
    () =>
      $("#cartDrawer")
        .classList
        .remove("open");


  $("#checkoutBtn").onclick = () => {

    if(!cart.length){

      return toast(
        "Your basket is empty"
      );

    }


    toast(
      "Demo checkout opened — no payment processed."
    );

    $("#cartDrawer")
      .classList
      .remove("open");

  };


  $("#aboutBtn").onclick =
    () =>
      $("#aboutDialog").showModal();


  $("#finalShopBtn").onclick =
    () =>
      document
        .querySelector("#drinks")
        .scrollIntoView({
          behavior:"smooth"
        });


  $("#surpriseBtn").onclick = () => {

    const p =
      drinks[
        Math.floor(
          Math.random() *
          drinks.length
        )
      ];

    openProduct(p.id);

  };


  $("#searchBtn").onclick = () => {

    $("#searchDialog").showModal();

    setTimeout(
      () =>
        $("#searchInput").focus(),
      50
    );

  };


  $("#searchInput").oninput = e => {

    const q =
      e.target.value
        .toLowerCase()
        .trim();


    const results =
      allItems()
        .filter(
          x =>
            `
              ${x.name}
              ${x.short || ""}
              ${x.note || ""}
              ${x.desc || ""}
            `
              .toLowerCase()
              .includes(q)
        )
        .slice(0,10);


    $("#searchResults").innerHTML =
      q

        ?

        results
          .map(
            x => `
              <div
                class="search-result"
                onclick="
                  openProduct('${x.id}');
                  document
                    .getElementById('searchDialog')
                    .close()
                "
              >

                <b>
                  ${x.name}
                </b>

                <span>
                  ${money(x.price)}
                </span>

              </div>
            `
          )
          .join("")

        :

        `
          <p class="muted">
            Search drinks, clothes,
            food, keyrings, gloss...
          </p>
        `;

  };

}


const generated = {

  chaos:[
    "Banana Riot",
    "banana · cherry · chilli"
  ],

  luxury:[
    "Velvet Cola",
    "black plum · vanilla · saffron"
  ],

  tropical:[
    "Mango Moon",
    "mango · yuzu · coconut"
  ],

  night:[
    "After Dark",
    "plum · blackberry · vanilla"
  ],

  sweet:[
    "Cherry Cake",
    "cherry · cream · biscuit"
  ]

};


$("#generateBtn").onclick = () => {

  const [
    name,
    notes
  ] =
    generated[
      $("#moodSelect").value
    ];


  $("#generatedFlavor").innerHTML = `

    <span>
      YOUR NEXT PEPSI
    </span>

    <strong>
      ${name}
    </strong>

    <small>
      ${notes}
    </small>

  `;


  toast(
    `${name} has entered the lab`
  );

};


renderDrinkFilters();
renderDrinks();
renderWear();
renderFoodTabs();
renderFood();
renderExtras();
renderCart();
setupAuth();
setupModals();
