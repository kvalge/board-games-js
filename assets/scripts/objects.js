const addGameBtn = document.getElementById('add-game-btn');
const searchBtn = document.getElementById('search-btn');

const games = [];

const renderGames = (filter = '') => {
  const gameList = document.getElementById('game-list');

  if (games.length === 0) {
    gameList.classList.remove('visible');
    return;
  } else {
    gameList.classList.add('visible');
  }
  gameList.innerHTML = '';

  const filteredGames = !filter
    ? games
    : games.filter((game) => game.info.name.includes(filter));

  filteredGames.forEach((game) => {
    const gameEl = document.createElement('li');
    const { info } = game;
    // let { getUpercasedName } = game;
    // getUppercasedName = getUppercasedName.bind(game);
    let text = game.getUppercasedName() + ' - ';
    for (const key in info) {
      if (key !== 'name') {
        text = text + `Description: ${key} - Price: ${info[key]}`;
      }
    }
    gameEl.textContent = text;
    gameList.append(gameEl);
  });
};

const addGameHandler = () => {
  const name = document.getElementById('name').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    name.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    alert('Invalid input!');
    return;
  }

  const newGame = {
    info: {
      name,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getUppercasedName: function () {
      return this.info.name.toUpperCase();
    },
  };

  games.push(newGame);
  console.log(games);
  renderGames();
};

const searchGameHandler = () => {
  const filterTerm = document.getElementById('filter-name').value;
  renderGames(filterTerm);
};

addGameBtn.addEventListener('click', addGameHandler);
searchBtn.addEventListener('click', searchGameHandler);
