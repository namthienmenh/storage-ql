const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const jobQueueService = require('modules/job_queue/job_queue.service');
const db = require("../../database");


router.get('/', getAll);

module.exports = router;

async function getAll(req, res, next) {
    const jobs = await db.JobQueue.findAll();
    res.success({data: jobs})
}