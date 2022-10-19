const Sequelize = require("sequelize");
const company = require('./company');
module.exports = class Post extends Sequelize.Model {
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
            company_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: company,
                    key: "id"
                  },
            },
            position: {
                type: Sequelize.STRING(20),
            },
            reward: {
                type: Sequelize.DECIMAL,
            },
            contents: {
                type: Sequelize.STRING(100),
            },
            technology: {
                type: Sequelize.STRING(20),
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
            tableName: "user",
            timestamps: false,
        }
        );
    };
    static associate(db){}
};