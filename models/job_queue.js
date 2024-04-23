const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_queue', {
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
    job_key: {
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
    job_result: {
      type: DataTypes.JSON,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2000-01-01 00:00:00"
    },
    last_run_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2000-01-01 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'job_queue',
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
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "priority",
        using: "BTREE",
        fields: [
          { name: "priority" },
        ]
      },
      {
        name: "run_at",
        using: "BTREE",
        fields: [
          { name: "last_run_at" },
        ]
      },
      {
        name: "name_run_at",
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "last_run_at" },
        ]
      },
      {
        name: "scheduled_at",
        using: "BTREE",
        fields: [
          { name: "scheduled_at" },
        ]
      },
      {
        name: "job_id",
        using: "BTREE",
        fields: [
          { name: "job_key" },
        ]
      },
    ]
  });
};
