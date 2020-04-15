const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

module.exports = {

  async register (request, response) {
    const { email } = request.body;

    try {
      if (await User.findOne({ email }))
       return response.status(400).send({ error: "User already exists" });

      const user = await User.create(request.body);

      // TO NOT RETURN THE PASSWORD
      user.password = undefined;

      return response.send({
        user,
        token: generateToken({ id: user.id })
      });
    } catch (error) {
      return response.status(400).send({ error: "User not created." });
    }
  },

  async authenticate (request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) 
     return response.status(400).send({ error: "User not found." });
    
    if (!await bcrypt.compare(password, user.password))
     return response.status(400).send({ error: "Invalid password" });

    // TO NOT RETURN THE PASSWORD
    user.password = undefined;

    response.send({ 
      user, 
      token: generateToken({ id: user.id })
    });
  }

}
