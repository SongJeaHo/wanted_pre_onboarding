const country = require("./country");


module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "location",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        
        country_id: {
          type: DataTypes.INTEGER,
          references: {
            model: country,
            key: "id"
          },
        }
      },
      {
        tableName: "location",
        timestamps: false,
      }
    );
  };
  