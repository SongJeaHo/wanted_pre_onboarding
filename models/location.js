const Sequelize = require("sequelize");
const country = require('./country');
module.exports = class Location extends Sequelize.Model {
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
        
        country_id: {
          type: Sequelize.INTEGER,
          references: {
            model: country,
            key: "id"
          },
        }
      },
      {
        sequelize,
        tableName: "location",
        timestamps: false,
      }
    );
  };
  static associate(db){}
};