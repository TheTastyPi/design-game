const gameData = {
  init: false,
  level: 0,
  timer: 1000 * 60 * 30,
  selecting: "",
  selected: null,
  slots: []
};
var designCanvas = new Vue({
  el: "#everything",
  data: {
    gameData: gameData,
    levels: levels,
    options: options,
    tabOpen: ""
  },
  methods: {
    ms2str: (t) => {
      t = Math.round(t);
      let ms = t % 1000;
      let sTot = (t - ms) / 1000;
      let s = sTot % 60;
      let mTot = (sTot - s) / 60;
      let m = mTot % 60;
      s = "0".repeat(2 - s.toString().length) + s;
      m = "0".repeat(2 - m.toString().length) + m;
      return `${m}:${s}`;
    }
  }
});
function startLevel(n) {
  gameData.level = n;
  gameData.slots = Array(levels[n].length);
}
function gameOver() {
  // todo
}
