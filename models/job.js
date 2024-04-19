const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    identifer: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    params: {
      type: DataTypes.JSON,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    retry_no: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    run_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'job',
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
        name: "job_id",
        using: "BTREE",
        fields: [
          { name: "identifer" },
        ]
      },
    ]
  });
};
