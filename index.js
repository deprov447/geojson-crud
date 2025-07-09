const express = require("express");
const initializeRoutes = require("./src/routes");

async function main() {
  const router = express();

  try {
    router.use(express.json());
    router.use(express.urlencoded({ extended: true }));
    initializeRoutes(router);
    router.listen(3000, () => {
      console.log(`App listening on port 3000`);
    });
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();
