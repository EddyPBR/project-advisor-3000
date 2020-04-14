const User = require('../models/User');

module.exports = {

  async register (request, response) {
    try {
      const user = await User.create(request.body);
      return response.send(user);
    } catch (error) {
      return response.status(400).send({ error: "error: user not created." });
    }
  }

}
