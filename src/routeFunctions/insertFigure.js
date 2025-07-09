const insertPoint = require("../dao/insertFigureDAO");

async function insertFigure(req, res) {
  const isPoint = req.originalUrl.includes("point");
  const { name, about, coordinates } = req.body;
  await insertPoint(isPoint, { name, about, coordinates });
  res.sendStatus(201)
}

module.exports = insertFigure;
