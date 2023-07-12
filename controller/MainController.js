const { Op } = require("sequelize");
const { Country, Travel, UserTravel, User } = require("../model");

class MainController {
  static async addCountry(req, res) {
    try {
      console.log(req.user, "0");
      if (req.user.role == 1) {
        const countries = await Country.create(req.body);
        return res.send({ countries, message: "add Country" });
      } else {
        return res.status(401).send("auth error");
      }
    } catch (e) {
      res.status(500).send("oops . . .");
    }
  }
  static async addTravel(req, res) {
    try {
      if (req.user.role == 1) {
        const travels = await Travel.create(req.body);
        return res.send({ travels, message: "add travel" });
      } else {
        return res.status(401).send("auth error");
      }
    } catch (e) {
      return res.status(500).send("Ooops...");
    }
  }
  static async getAllTravelsAndUsers(req, res) {
    try {
      if (req.user.role == 1) {
        const allTravels = await Travel.findAll({
          include: [
            {
              model: UserTravel,
              include: [{ model: User, as: "user" }],
            },
          ],
        });
        return res.send({ allTravels, message: "all travels and users" });
      } else {
        return res.status(401).send("auth error");
      }
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
  static async seeAllCountries(req, res) {
    try {
      if (req.user.role == 1) {
        const allCountries = await Country.findAll();
        return res.send({ allCountries, message: "all countries" });
      } else {
        return res.status(401).send("auth error");
      }
    } catch (e) {
      return res.status(500).json({ message: e });
    }
  }
  static async deleteCountry(req, res) {
    try {
      if (req.user.role == 1) {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
          return res.status(500).send("country id not found");
        } else {
          await Country.destroy({
            where: {
              id: req.params.id,
            },
          });
          return res.send("delete" + req.params.id);
        }
      }
      return res.status(401).send("auth error");
    } catch (e) {
      res.status(500).send("oops ...");
    }
  }
  static async deleteTravel(req, res) {
    try {
      if (req.user.role == 1) {
        const travel = await Travel.findByPk(req.params.id);
        if (!travel) {
          return res.status(500).send("travel id not found");
        } else {
          await Travel.destroy({
            where: {
              id: req.params.id,
            },
          });
          return res.send("delete" + req.params.id);
        }
      }
      return res.status(401).send("auth error");
    } catch (e) {
      res.status(500).send("oops ...");
    }
  }

  static async updateCountry(req, res) {
    try {
      if (req.user.role == 1) {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
          return res.status(500).send("country id not found");
        } else {
          await Country.update(
            { ...req.body },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          return res.send("update" + req.params.id);
        }
      }
      return res.status(401).send("auth error");
    } catch (e) {
      res.status(500).send("oops ...");
    }
  }
  static async updateTravel(req, res) {
    try {
      if (req.user.role == 1) {
        const travel = await Travel.findByPk(req.params.id);
        if (!travel) {
          return res.status(500).send("travel id not found");
        } else {
          await Travel.update(
            { ...req.body },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          return res.send("update" + req.params.id);
        }
      }
      return res.status(401).send("auth error");
    } catch (e) {
      res.status(500).send("oops ...");
    }
  }
  //// 0
  static async searchCountry(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(500).send("country not found");
      }
      const countries = await Country.findAll({
        where: {
          name: name,
        },
      });
      res.send({ countries, message: "search country" });
    } catch (e) {
      res.status(500).send("oops ...");
    }
  }

  static async addUserTravel(req, res) {
    try {
      if (req.user.role == 0) {
        const userTravel = await UserTravel.create(req.body);
        return res.send({ userTravel, message: "add userTravel" });
      } else {
        res.status(401).send("auth error");
      }
    } catch (e) {
      res.status(500).send("oops . . .");
    }
  }
  static async getMyTravelsAndCheckPrice(req, res) {
    try {
      if (req.user.role == 0) {
        const allTravels = await UserTravel.findAll({
          where: {
            userId: req.user.id,
          },
          include: Travel,
        });
        const sum = allTravels.reduce((a, b) => a + b.travel.ticket_price, 0);
        return res.send({
          allTravels,
          sum,
          message: "getMyTravelsAndCheckPrice",
        });
      } else {
        res.status(401).send("auth error");
      }
    } catch (e) {
      res.status(500).send("oops . . .");
    }
  }
  static async deleteMyTravel(req, res) {
    try {
      if (req.user.role == 0) {
        await UserTravel.destroy({
          where: {
            id: req.params.id,
          },
        });
        return res.send({ message: "deleteMyTravel" });
      } else {
        res.status(401).send("auth error");
      }
    } catch (e) {
      res.status(500).send("oops . . .");
    }
  }
  static async seeTravelsWhereNotRegister(req, res) {
    try {
      if (req.user.role == 0) {
        const travels = await UserTravel.findAll({
          where: {
            userId: {
              [Op.ne]: req.user.id,
            },
          },
        });
        return res.send({ travels, message: "seeTravelsWhereNotRegister" });
      } else {
        res.status(401).send("auth error");
      }
    } catch (e) {
      res.status(500).send("oops . . .");
    }
  }
}

module.exports = { MainController };
