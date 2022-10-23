const express = require("express");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const controllers = require("../app/controllers");
const swaggerDocument = require("../swagger.json");
const apiRouter = express.Router();

const publicDir = path.join(process.cwd(), "public");

apiRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//endpoint static
apiRouter.use("/", express.static("public"));
apiRouter.use("/add", express.static(publicDir));
apiRouter.use("/update/:id", express.static(publicDir));
apiRouter.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))
);

//endpoint Uploads
apiRouter.use("/api/uploads", controllers.api.upload.onUpload);

//endpoint API sql (query) mobil
apiRouter.get(
  "/api/firstControl/mobils",
  controllers.api.firstControl.mobilController.handleGetMobils
);
apiRouter.get(
  "/api/firstControl/mobils/:id",
  controllers.api.firstControl.mobilController.handleGetMobil
);
apiRouter.post(
  "/api/firstControl/mobils",
  controllers.api.firstControl.mobilController.handleCreateMobil
);
apiRouter.put(
  "/api/firstControl/mobils/:id",
  controllers.api.firstControl.mobilController.handleUpdateMobil
);
apiRouter.delete(
  "/api/firstControl/mobils/:id",
  controllers.api.firstControl.mobilController.handleDeleteMobil
);

//endpoint API sequelize mobil
apiRouter.get(
  "/api/SecondControl/mobils",
  controllers.api.SecondControl.mobilController.list
);
apiRouter.get(
  "/api/SecondControl/mobils/:id",
  controllers.api.SecondControl.mobilController.show
);
apiRouter.post(
  "/api/SecondControl/mobils",
  controllers.api.SecondControl.mobilController.create
);
apiRouter.put(
  "/api/SecondControl/mobils/:id",
  controllers.api.SecondControl.mobilController.update
);
apiRouter.delete(
  "/api/SecondControl/mobils/:id",
  controllers.api.SecondControl.mobilController.destroy
);

apiRouter.post(
  "/api/SecondControl/register",
  controllers.api.SecondControl.authController.register
);

apiRouter.get("/api/firstControl/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
