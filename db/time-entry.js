module.exports = function (sequelize, DataTypes) {
    return sequelize.define('time_entry', {
            tabId: {
                type: DataTypes.INTEGER,
                unique: false
            },
            dateOpen: {
                type: DataTypes.DATE,
                unique: false
            },
            dateClosed: {
                type: DataTypes.DATE,
                unique: false
            },
            fullUrl: {
                type: DataTypes.STRING,
                unique: false
            },
            host: {
                type: DataTypes.STRING,
                unique: false
            }
        }
    )
};
