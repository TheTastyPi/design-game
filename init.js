function init() {
  startLevel(0);
  gameData.init = true;
  setInterval(() => {
    gameData.timer -= 16.6;
    if (gameData.timer < 0) gameOver();
  }, 16.6);
}
