module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country",{
        name:Sequelize.STRING
    })
    return Country
}
