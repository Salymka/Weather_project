const { validationResult } = require('express-validator');
const exampleService = require('../services/example-service');


class exampleController {
  async getTaskById(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) res.status(400).json({ message: 'Bad params', errors });

      const { id } = req.params;
      const tasks = await exampleService.getTaskById(id);

      return res.json(tasks);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Unexpected error' });
    }
  }

  async getTasks(req, res) {
    try {
      const tasks = await exampleService.getTasks();

      return res.json(tasks);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Unexpected error' });
    }
  }
}

module.exports = new exampleController();