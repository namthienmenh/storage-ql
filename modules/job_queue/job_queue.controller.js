const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('middleware/validate-request');
const jobQueueService = require('modules/job_queue/job_queue.service');


router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    jobQueueService.getAll()
        .then(jobs => res.json(jobs))
        .catch(next);
}