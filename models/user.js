module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "user",
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
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
        tableName: "user",
        timestamps: false,
      }
    );
  };
  