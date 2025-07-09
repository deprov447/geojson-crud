const getDB = require("../utils/getDB");

async function getFigureAllOrId(isPoint, id = null) {
  const db = await getDB;
  const tableName = isPoint ? "points" : "polygons";
  console.log(tableName);
  if (id !== null)
    return await db.all(
      `SELECT id, name, about, AsGeoJSON(geom) as geom FROM ${tableName}
       WHERE id = ?`,
      [id]
    );
  return await db.all(
    `SELECT id, name, about, AsGeoJSON(geom) as geom FROM ${tableName}`
  );
}

module.exports = getFigureAllOrId;
