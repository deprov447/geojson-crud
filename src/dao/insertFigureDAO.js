const getDB = require("../utils/getDB");

async function insertFigure(isPoint, { name, about, coordinates }) {
  const db = await getDB;
  const tableName = isPoint ? "points" : "polygons";
  const geoJSONType = isPoint ? "Point" : "Polygon";
  await db.run(
    `INSERT INTO ${tableName} (name, about, geom) VALUES (?, ?, SetSRID(GeomFromGeoJSON(?), 4326))`,
    [name, about, JSON.stringify({ type: geoJSONType, coordinates })]
  );
  console.log("Figure inserted successfully.");
}

module.exports = insertFigure;
