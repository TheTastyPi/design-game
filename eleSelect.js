const options = {
  shapes: [
    { type: "shape", name: "rectangle" },
    { type: "shape", name: "circle" },
    { type: "shape", name: "line" },
    { type: "shape", name: "triangle" }
  ],
  images: [],
  fonts: [
    { type: "text", name: "Times New Roman", fontType: "serif" },
    { type: "text", name: "Rockwell", fontType: "serif" },
    { type: "text", name: "Minion", fontType: "serif" },
    { type: "text", name: "Lucida", fontType: "serif" },
    { type: "text", name: "Courier", fontType: "serif" },
    { type: "text", name: "Helvetica", fontType: "san-serif" },
    { type: "text", name: "Proxima Nova", fontType: "san-serif" },
    { type: "text", name: "Futura", fontType: "san-serif" },
    { type: "text", name: "Public Sans", fontType: "san-serif" },
    { type: "text", name: "Codec", fontType: "san-serif" }
  ]
};
const defaultEleProp = {
  scaleX: 1,
  scaleY: 1,
  angle: 0,
  zIndex: 0,
  opacity: 1
};
function openTab(type) {
  if (gameData.selected !== null) return;
  app.tabOpen = app.tabOpen !== type ? type : "";
}
function selectEle(ele, index) {
  if (gameData.designs[gameData.level].length === 10) return;
  gameData.selected = { ...ele };
  gameData.selectIndex = index;
  gameData.editSelect = null;
}
async function placeEle(index) {
  if (!gameData.selected) return;
  let ele = gameData.selected;
  let i = gameData.designs[gameData.level].push(ele) - 1;
  gameData.editSelect = ele;
  gameData.selected = null;
  gameData.selectIndex = null;
  let slot = levels[gameData.level][index];
  Object.assign(ele, defaultEleProp);
  if (ele.type === "shape") {
    Object.assign(ele, { color: "#add8e6" });
  }
  if (ele.type === "text") {
    Object.assign(ele, {
      color: "#000000",
      fontSize: 12,
      textAlign: "left",
      width: slot.w,
      height: slot.h
    });
  }
  await Vue.nextTick();
  ele.translateX = slot.x + slot.w / 2 + 2 - $("ele" + i).offsetWidth / 2;
  ele.translateY = slot.y + slot.h / 2 + 2 - $("ele" + i).offsetHeight / 2;
  app.tabOpen = "";
}
function editEle(ele) {
  if (gameData.selected) return;
  gameData.editSelect = ele;
}
function deselect() {
  gameData.editSelect = null;
}
document.addEventListener("keydown", function (event) {
  event.preventDefault();
  let ctrl = event.ctrlKey || event.metaKey;
  if (ctrl && event.code === "KeyD") deselect();
});
