module.exports = function (sequelize, DataTypes) {
    const Client = sequelize.define('client', {
            login: {
                type: DataTypes.STRING,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                unique: false
            },
            password: {
                type: DataTypes.STRING,
                unique: false
            }
        }
    );
    Client.associate = function (models) {
        Client.hasMany(models.TimeEntry, {
            // specifying the @JoinColumn name in the target table. Target table is the one that is argument ot hasMany method
            // Default is tha nem of the source + "id"
            foreignKey: 'client_id',
            // specifying the column in the source table to associate foreign key with. Default is to primary key
            sourceKey: 'id'
        })
    };
    return Client;
};
