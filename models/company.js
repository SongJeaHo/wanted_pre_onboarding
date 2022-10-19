const Sequelize = require("sequelize");
const location = require('./location');
module.exports = class Company extends Sequelize.Model {
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
        },
        location_id: {
          type: Sequelize.INTEGER,
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
        sequelize,
        tableName: "company",
        timestamps: false,
      }
    );
  };
  static associate(db){}
};