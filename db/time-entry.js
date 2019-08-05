module.exports = function (sequelize, DataTypes) {
    return sequelize.define('time_entry', {
            host: {
                type: DataTypes.STRING,
                unique: false
            }
        }
    )
};
