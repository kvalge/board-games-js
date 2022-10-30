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
    let text = game.info.name + ' - ';
    for (const key in game.info) {
      if (key !== 'name') {
        text = text + `Description: ${key} - Price: ${game.info[key]}`;
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
    id: Math.random(),
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
