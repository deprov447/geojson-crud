const getPoints = require("../dao/getFigureDAO");

async function getFigureById(req, res) {
  const isPoint = req.originalUrl.includes("point");
  const id = req.params.id;
  const data = await getPoints(isPoint, id);
  res.json(data);
}

module.exports = getFigureById;
