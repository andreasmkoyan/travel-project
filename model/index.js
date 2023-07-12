const { Sequelize } = require("sequelize");
const City = require("./City");

const sequelize = new Sequelize("d", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const User = require("./user")(sequelize, Sequelize);
const Travel = require("./Travel")(sequelize, Sequelize);
const Country = require("./City")(sequelize, Sequelize);
const UserTravel = require("./UserTravel")(sequelize, Sequelize);

Travel.belongsTo(Country, {
  foreignKey: "from_country",
  as: "from",
  onDelete: "cascade",
  onUpdate: "cascade",
});
Travel.belongsTo(Country, {
  foreignKey: "to_country",
  as: "to",
  onDelete: "cascade",
  onUpdate: "cascade",
});

UserTravel.belongsTo(Travel, { onDelete: "cascade", onUpdate: "cascade" });
UserTravel.belongsTo(User, {
  as: "user",
  onDelete: "cascade",
  onUpdate: "cascade",
});

// Country.hasMany(Travel);
Travel.hasMany(UserTravel);
User.hasMany(UserTravel);

sequelize.sync();
module.exports = {
  User,
  sequelize,
  Country,
  UserTravel,
  Travel,
};
