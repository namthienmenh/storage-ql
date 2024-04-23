const db = require('database');
db.JobQueue = require('modules/job_queue/job_queue.model')(db.sequelize, db.DataTypes);

module.exports = {
    getAll
};

async function getAll() {
    return await db.JobQueue.findAll();
}