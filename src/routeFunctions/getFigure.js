const getPointByCoordinates = require("../dao/getPointByCoordinatesDAO");
const getPolygonByCoordinates = require("../dao/getPolygonByCoordinatesDAO");
const getPoints = require("../dao/getFigureDAO");

async function getFigure(req, res) {
  const isPoint = req.originalUrl.includes("point");
  if (req.body && req.body.coordinates) {
    const coordinates = req.body.coordinates;
    if (isPoint) {
      const data = await getPointByCoordinates(coordinates);
      res.json(data);
    } else {
      const data = await getPolygonByCoordinates(coordinates);
      res.json(data);
    }
  } else {
    const data = await getPoints(isPoint);
    res.json(data);
  }
}

module.exports = getFigure;
