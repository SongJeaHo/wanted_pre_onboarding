module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "country",
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
      },
      {
        tableName: "country",
        timestamps: false,
      }
    );
  };
  