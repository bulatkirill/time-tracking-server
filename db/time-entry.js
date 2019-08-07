module.exports = function (sequelize, DataTypes) {
    return sequelize.define('time_entry', {
            tab_id: {
                type: DataTypes.INTEGER,
                unique: false
            },
            date_open: {
                type: DataTypes.DATE,
                unique: false
            },
            date_closed: {
                type: DataTypes.DATE,
                unique: false
            },
            full_url: {
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
