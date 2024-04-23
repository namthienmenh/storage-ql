const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jav_film', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    title_en: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    actress: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    series: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    maker: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    added_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jav_film',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
