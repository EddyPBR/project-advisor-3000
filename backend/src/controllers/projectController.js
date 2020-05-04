const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {
  async index(request, response) {
    try {
      const projects = await Project.find({ 'user': request.userId }).populate(['user', 'tasks']);
      return response.send({ projects });
    } catch (error) {
      return response.status(400).send({ error: 'Error loading projects' });
    }
  },

  async search(request, response) {
    try {
      const project = await Project.findById(
        request.params.projectId
      ).populate(['user', 'tasks']);
      return response.send({ project });
    } catch (error) {
      return response.status(400).send({ error: 'Error loading project' });
    }
  },

  async create(request, response) {
    try {
      const { title, description, tasks } = request.body;

      const project = await Project.create({
        title,
        description,
        user: request.userId,
      });

      await Promise.all(
        tasks.map(async (task) => {
          const projectTask = new Task({ ...task, project: project._id });
          await projectTask.save();
          project.tasks.push(projectTask);
        })
      );

      await project.save();

      return response.send({ project });
    } catch (error) {
      return response.status(400).send({ error: 'Error creating new project' });
    }
  },

  async update(request, response) {
    try {
      const { title, description, tasks } = request.body;

      const project = await Project.findByIdAndUpdate(
        request.params.projectId,
        {
          title,
          description,
        },
        { new: true }
      );

      project.tasks = [];
      await Task.deleteOne({ project: project._id });

      await Promise.all(
        tasks.map(async (task) => {
          const projectTask = new Task({ ...task, project: project._id });
          await projectTask.save();
          project.tasks.push(projectTask);
        })
      );

      await project.save();

      return response.send({ project });
    } catch (error) {
      return response.status(400).send({ error: 'Error updating project' });
    }
  },

  async delete(request, response) {
    try {
      await Project.findByIdAndRemove(request.params.projectId);
      return response.send({ deleted: true });
    } catch (error) {
      return response.status(400).send({ error: 'Error deleting project' });
    }
  },
};
