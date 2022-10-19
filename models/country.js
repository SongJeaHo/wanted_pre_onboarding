module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "country",
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        tableName: "country",
        timestamps: false,
      }
    );
  };
  