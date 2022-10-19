module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "post",
        {
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            company_id: {
                type: DataTypes.INTEGER,
            },
            position: {
                type: DataTypes.STRING(20),
            },
            reward: {
                type: DataTypes.DECIMAL,
            },
            contents: {
                type: DataTypes.STRING(100),
            },
            technology: {
                type: DataTypes.STRING(20),
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
  