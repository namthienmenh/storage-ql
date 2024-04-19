var DataTypes = require("sequelize").DataTypes;
var _jav_film = require("./jav_film");
var _jav_media = require("./jav_media");
var _job = require("./job");

function initModels(sequelize) {
  var jav_film = _jav_film(sequelize, DataTypes);
  var jav_media = _jav_media(sequelize, DataTypes);
  var job = _job(sequelize, DataTypes);


  return {
    jav_film,
    jav_media,
    job,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
