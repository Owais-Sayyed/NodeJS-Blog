const { model } = require("mongoose");

function isActiveRoute(route, currentRoute) {
  return route === currentRoute ? "active" : "";
}

module.exports = { isActiveRoute };
