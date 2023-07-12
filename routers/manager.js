const express = require("express");
const { MainController } = require("../controller/MainController");
const managerRouter = express.Router();

managerRouter.post("/addCountry", MainController.addCountry);
managerRouter.post("/addTravel", MainController.addTravel);
managerRouter.get(
  "/getAllTravelsAndUsers",
  MainController.getAllTravelsAndUsers
);
managerRouter.get("/allCountries", MainController.seeAllCountries);
managerRouter.delete("/deleteCountry/:id", MainController.deleteCountry);
managerRouter.delete("/deleteTravel/:id", MainController.deleteTravel);
managerRouter.patch("/updateCountry/:id", MainController.updateCountry);
managerRouter.patch("/updateTravel/:id", MainController.updateTravel);
managerRouter.post("/search", MainController.searchCountry);

module.exports = {
  managerRouter,
};
