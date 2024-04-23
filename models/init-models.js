var DataTypes = require("sequelize").DataTypes;
var _javFilm = require("./javFilm");
var _javMedium = require("./javMedium");
var _jobQueue = require("./jobQueue");

function initModels(sequelize) {
  var javFilm = _javFilm(sequelize, DataTypes);
  var javMedium = _javMedium(sequelize, DataTypes);
  var jobQueue = _jobQueue(sequelize, DataTypes);


  return {
    javFilm,
    javMedium,
    jobQueue,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
