const getDB = require("../utils/getDB");

async function getPolygonByCoordinates(coordinates) {
  const db = await getDB;
  return await db.get(
    `    SELECT id, name, AsGeoJSON(geom) as geom
          FROM polygons
          WHERE ST_Contains(
          geom,
          SetSRID(MakePoint(?, ?), 4326)
    )
    `,
    coordinates
  );
}

module.exports = getPolygonByCoordinates;
