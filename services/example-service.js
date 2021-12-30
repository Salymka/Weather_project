const axios = require('axios');
const User = require('../models/User')

class ExampleService {
  async getTaskById(id) {
    const response = await axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
      responseType: 'application/json'
    });

    // const file = new File({name, type, parent, user: req.user.id})
    // const parentFile = await File.findOne({_id: parent})
    // await file.save()

    return response.data;
  }

  async getTasks() {
    const response = await axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/todos`,
      responseType: 'application/json'
    });

    return response.data;
  }
}


module.exports = new ExampleService();