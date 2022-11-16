class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \€${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h3>Total: \€${0}</h3>
    <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h3');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    alert(this.product.title + ' game is added to the cart');
    App.addProductToChart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
    <div>
    <img src="${this.product.imageUrl}" alt="${this.product.title}">
    <div class="product-item__content">
    <h2>${this.product.title}</h2>
    <h3>\€${this.product.price}</h3>
    <p>${this.product.description}</p>
    <button>Add to Cart</button>
    </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Chess',
      'https://cdn.pixabay.com/photo/2020/01/26/10/33/chess-4794265_1280.jpg',
      "Abstract strategy game played on a chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. The player who moves first controls white pieces, and the other controls black pieces. The object of the game is to checkmate the opponent's king, whereby the king is under immediate attack (in 'check') and there is no way for it to escape. There are also several ways a game can end in a draw.",
      29.99
    ),
    new Product(
      'Dominoes',
      'https://cdn.pixabay.com/photo/2016/08/23/22/51/dominoes-1615744_1280.jpg',
      'Played with gaming pieces, commonly known as dominoes. Each domino is a rectangular tile, usually with a line dividing its face into two square ends. Each end is marked with a number of spots or is blank. The backs of the tiles in a set are indistinguishable, either blank or having some common design. The gaming pieces make up a domino set, sometimes called a deck or pack. The traditional European domino set consists of 28 tiles, featuring all combinations of spot counts between zero and six.',
      19.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement('ui');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToChart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
