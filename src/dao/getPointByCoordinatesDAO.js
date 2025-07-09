const getDB = require("../utils/getDB");

async function getPointByCoordinates(coordinates) {
  const db = await getDB;
  const point = await db.get(
    `SELECT id, name, about, AsGeoJSON(geom) as geom
      FROM points
      WHERE ST_Equals(geom, SetSRID(GeomFromGeoJSON(?), 4326))
    `,
    [JSON.stringify({ type: "Point", coordinates })]
  );
  return point;
}

module.exports = getPointByCoordinates;
