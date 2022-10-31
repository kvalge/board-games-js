const productList = {
  products: [
    {
      title: 'Chess',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/01/26/10/33/chess-4794265_1280.jpg',
      price: 19.99,
      description:
        "Abstract strategy game played on a chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. The player who moves first controls white pieces, and the other controls black pieces. The object of the game is to checkmate the opponent's king, whereby the king is under immediate attack (in 'check') and there is no way for it to escape. There are also several ways a game can end in a draw.",
    },
    {
      title: 'Dominoes',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/08/23/22/51/dominoes-1615744_1280.jpg',
      price: 13.99,
      description:
        'Played with gaming pieces, commonly known as dominoes. Each domino is a rectangular tile, usually with a line dividing its face into two square ends. Each end is marked with a number of spots or is blank. The backs of the tiles in a set are indistinguishable, either blank or having some common design. The gaming pieces make up a domino set, sometimes called a deck or pack. The traditional European domino set consists of 28 tiles, featuring all combinations of spot counts between zero and six.',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ui');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}">
      <div class="product-item__content">
      <h2>${prod.title}</h2>
      <h3>\€${prod.price}</h3>
      <p>${prod.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
