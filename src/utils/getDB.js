const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const initializeTables = require("./initializeTables");

async function getDB() {
  const db = await open({
    filename: "./spatial.db",
    driver: sqlite3.Database,
  });

  await db.loadExtension("/opt/homebrew/lib/mod_spatialite.dylib");
  console.log("Spatialite extension loaded.");

  await db.run(`SELECT InitSpatialMetaData(1);`);
  console.log("Spatial metadata initialized.");

  await initializeTables(db);

  return db;
}

module.exports = getDB();
