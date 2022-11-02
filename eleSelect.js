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
  translateX: 0,
  translateY: 0,
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
  gameData.selected = { ...ele };
  gameData.selectIndex = index;
  gameData.editSelect = null;
}
function interactEle(index) {
  if (getEle(index)) {
    if (!gameData.selected) editEle(index);
  } else placeEle(index);
}
function placeEle(index) {
  if (!gameData.selected) return;
  let ele = gameData.selected;
  gameData.designs[gameData.level][index] = ele;
  gameData.editSelect = ele;
  gameData.selected = null;
  gameData.selectIndex = null;
  Object.assign(ele, defaultEleProp);
  if (ele.type === "shape") {
    Object.assign(ele, { color: "#add8e6" });
  }
  if (ele.type === "text") {
    Object.assign(ele, {
      color: "#000000",
      fontSize: 12,
      textAlign: "left"
    });
  }
  app.tabOpen = "";
}
function editEle(index) {
  gameData.editSelect = getEle(index);
}
function deselect() {
  gameData.editSelect = null;
}
document.addEventListener("keydown", function (event) {
  event.preventDefault();
  let ctrl = event.ctrlKey || event.metaKey;
  if (ctrl && event.code === "KeyD") deselect();
});
