module.exports = (sequelize, Sequelize) => {
  const Travel = sequelize.define("travel", {
    count: Sequelize.INTEGER,
    // from_country: Sequelize.STRING,
    // to_country: Sequelize.STRING,
    start_time: Sequelize.TIME,
    ticket_price: Sequelize.INTEGER,
  });
  return Travel
};
