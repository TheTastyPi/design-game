const gameData = {
  init: false,
  level: 0,
  timer: 1000 * 60 * 30,
  selected: null,
  selectIndex: null,
  editSelect: null,
  designs: []
};
var app = new Vue({
  el: "#everything",
  data: {
    gameData: gameData,
    levels: levels,
    options: options,
    tabOpen: "",
    f: window
  }
});
function startLevel(n) {
  gameData.level = n;
  gameData.designs[n] = Array(levels[n].length);
}
function gameOver() {
  // todo
}
function ms2str(t) {
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
function $(id) {
  return document.getElementById(id);
}
function getEle(index) {
  return gameData.designs[gameData.level]?.[index];
}
function opa2hex(opa) {
  let hex = Math.floor(opa*255).toString(16);
  if (hex.length === 1) hex = "0"+hex;
  return hex;
}
