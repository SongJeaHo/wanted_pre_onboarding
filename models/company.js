const location = require("./location");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "company",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(20),
        },
        location_id: {
          type: DataTypes.INTEGER,
          references: {
                    model: location,
                    key: "id"
          },
        },
        created_at: {
          type: "TIMESTAMP",
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        updated_at: {
          type: "TIMESTAMP",
          defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
      },
      {
        tableName: "company",
        timestamps: false,
      }
    );
  };
  