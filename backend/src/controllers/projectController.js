const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {

  async index(request, response){
    try {
      const projects = await Project.find().populate('user');
      return response.send({ projects });
    } catch(error) {
      return response.status(400).send({ error: "Error loading projects" });
    }
  },

  async search(request, response){
    try {
      const project = await Project.findById(request.params.projectId).populate('user');
      return response.send({ project });
    } catch(error) {
      return response.status(400).send({ error: "Error loading project" });
    }
  },

  async register(request, response){
    try {
      const project = await Project.create({ ...request.body, user: request.userId });
      return response.send({ project });
    } catch(error) {
      return response.status(400).send({ error: "Error creating new project" });
    }
  },

  update(request, response){
    response.send({ user: request.userId });
  },

  delete(request, response){
    response.send({ user: request.userId });
  }

}
