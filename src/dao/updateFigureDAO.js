const getDB = require("../utils/getDB");

async function updateFigureById(
  isPoint,
  id,
  { name, about, coordinates }
) {
  const db = await getDB;
  const tableName = isPoint ? "points" : "polygons";
  const geoJSON = JSON.stringify({ type: "Point", coordinates });

  const result = await db.run(
    `UPDATE ${tableName}
     SET name = ?, about = ?, geom = SetSRID(GeomFromGeoJSON(?), 4326)
     WHERE id = ?`,
    [name, about, geoJSON, id]
  );

  if (result.changes > 0) {
    console.log(`${tableName}} at [${coordinates}] updated successfully.`);
  }
}

module.exports = updateFigureById;
