async function geometryColumnExists(db, tableName) {
  const row = await db.get(
    `SELECT f_geometry_column FROM geometry_columns WHERE f_table_name = ?`,
    tableName.toLowerCase()
  );
  return !!row;
}

async function initializeTables(db) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS points (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        about TEXT
      );
    `);

    if (!(await geometryColumnExists(db, "points"))) {
      await db.run(
        `SELECT AddGeometryColumn('points', 'geom', 4326, 'POINT', 'XY');`
      );
      console.log("Geometry column added to 'points' table.");
    }

    await db.run(`
      CREATE TABLE IF NOT EXISTS polygons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        about TEXT
      );
    `);

    if (!(await geometryColumnExists(db, "polygons"))) {
      await db.run(
        `SELECT AddGeometryColumn('polygons', 'geom', 4326, 'POLYGON', 'XY');`
      );
      console.log("Geometry column added to 'polygons' table.");
    }
}

module.exports = initializeTables