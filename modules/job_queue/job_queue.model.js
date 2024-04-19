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
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    run_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2000-01-01 00:00:00"
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
    },
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
        name: "job_id",
        using: "BTREE",
        fields: [
          { name: "identifer" },
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
          { name: "run_at" },
        ]
      },
      {
        name: "name_run_at",
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "run_at" },
        ]
      },
    ]
  });
};
