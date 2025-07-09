const updateFigureById = require("../dao/updateFigureDAO");

async function updateFigure(req, res) {
  const isPoint = req.originalUrl.includes("point");
  const { id, name, about, coordinates } = req.body;
  await updateFigureById(isPoint, id, {
    name,
    about,
    coordinates,
  });
  res.sendStatus(200)
}

module.exports = updateFigure;
