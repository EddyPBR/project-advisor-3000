const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {

  index(request, response){
    response.send({ user: request.userId });
  },

  search(request, response){
    response.send({ user: request.userId });
  },

  register(request, response){
    response.send({ user: request.userId });
  },

  update(request, response){
    response.send({ user: request.userId });
  },

  delete(request, response){
    response.send({ user: request.userId });
  }

}
