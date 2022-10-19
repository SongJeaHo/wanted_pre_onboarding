// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// const User = require('/user')(sequelize);
// const Post = require('/post')(sequelize);
// const Country = require('/country')(sequelize);
// const Location = require('/location')(sequelize);
// const Company = require('/company')(sequelize);



// module.exports = db;


const Sequelize = require("sequelize");
const User = require('./user');
const Country = require('./country');
const Location = require('./location');
const Company = require('./company');
const Post = require('./post');
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
User.init(sequelize);
db.Country = Country;
Country.init(sequelize);
db.Location = Location;
Location.init(sequelize);
db.Company = Company;
Company.init(sequelize);
db.Post = Post;
Post.init(sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;