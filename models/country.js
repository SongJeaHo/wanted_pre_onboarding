const Sequelize = require("sequelize");
module.exports = class Country extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "country",
        timestamps: false,
      }
    );
  };
  static associate(db){}
};