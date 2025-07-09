const getFigure = require("./routeFunctions/getFigure");
const getFigureById = require("./routeFunctions/getFigureById");
const insertFigure = require("./routeFunctions/insertFigure");
const updateFigure = require("./routeFunctions/updateFigure");

function routes(router) {
  router.get("/point/:id", getFigureById);
  router.get("/point", getFigure);
  router.post("/point", insertFigure);
  router.patch("/point", updateFigure);

  router.get("/polygon/:id", getFigureById);
  router.get("/polygon", getFigure);
  router.post("/polygon", insertFigure);
  router.patch("/polygon", updateFigure);
}

module.exports = routes;
