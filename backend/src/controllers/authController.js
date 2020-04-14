const User = require('../models/User');

module.exports = {

  async register (request, response) {
    const { email } = request.body;

    try {
      if (await User.findOne({ email }))
        return response.status(400).send({ error: "User already exists" });

      const user = await User.create(request.body);
      
      // TO NOT RETURN THE PASSWORD
      user.password = undefined;

      return response.send(user);
    } catch (error) {
      return response.status(400).send({ error: "error: user not created." });
    }
  }

}
