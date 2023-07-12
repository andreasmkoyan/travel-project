module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        emailToken:Sequelize.STRING,
        isVerified: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        accessToken:Sequelize.STRING,
        role:Sequelize.INTEGER
    });
    return User;
}

