txtvia.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ txtvia.showFirefoxContextMenu(e); }, false);
};

txtvia.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-txtvia").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { txtvia.onFirefoxLoad(); }, false);
