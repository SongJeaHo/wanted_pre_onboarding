module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "company",
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        location_id: {
          type: DataTypes.INTEGER,
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
        tableName: "company",
        timestamps: false,
      }
    );
  };
  