const express = require("express");
const { MainController } = require("../controller/MainController");
const userRouter = express.Router();

userRouter.get(
  "/getMyTravelsAndCheckPrice",
  MainController.getMyTravelsAndCheckPrice
);
userRouter.get(
  "/seeTravelsWhereNotRegister",
  MainController.seeTravelsWhereNotRegister
);
userRouter.post("/addUserTravel", MainController.addUserTravel);
userRouter.post("/search", MainController.searchCountry);
userRouter.delete("/deleteMyTravel/:id", MainController.deleteMyTravel);
module.exports = {
  userRouter,
};
