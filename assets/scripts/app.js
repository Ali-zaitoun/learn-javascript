class Product {
  // field
  title = "DEFAULT";
  imageUrl;
  price;
  description;

  constructor(title, image, description, price) {
    //properties
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}
class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);

    if (cssClasses) {
      rootElement.className = cssClasses;
    }

    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId,false);
    this.orderProducts = () => {
      console.log("ordering .....");
      console.log(this.items);
    };
    this.render();
  }
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");

    cartEl.innerHTML = `
    <h2>Total \$${0}</h2>
    <button>Order Now</button>
    `;

    const orderButton = cartEl.querySelector("button");
    orderButton.addEventListener("click", this.orderProducts);
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
          <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
          `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  #products = [];

  constructor(renderHookId) {
    super(renderHookId,false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        "a pillow",
        "https://hushblankets.com/cdn/shop/products/Pillow_Cloud_Mattress_Graph-Iced-_Product_JaredLeckie_11-10-23_1_2048x.jpg?v=1724682356",
        "a soft pillow",
        19.99
      ),
      new Product(
        "a carpet",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCoKy-jvCGbnkbbh0Fb85udzxysOWvo7b4Q&s",
        "a soft carpet carpet carpet carpet carpet",
        89.99
      ),
    ];
    this.renderProducts();
  }
  renderProducts() {
    for (const prod of this.#products) {
    new ProductItem(prod, "prod-list");
    }
  }
  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}
class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
