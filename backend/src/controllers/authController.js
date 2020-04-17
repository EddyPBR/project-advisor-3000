const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const mailer = require('../modules/mailer');

module.exports = {
  async register(request, response) {
    const { email } = request.body;

    try {
      if (await User.findOne({ email }))
        return response.status(400).send({ error: 'User already exists' });

      const user = await User.create(request.body);

      // TO NOT RETURN THE PASSWORD
      user.password = undefined;

      return response.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (error) {
      return response.status(400).send({ error: 'User not created.' });
    }
  },

  async authenticate(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) return response.status(400).send({ error: 'User not found.' });

    if (!(await bcrypt.compare(password, user.password)))
      return response.status(400).send({ error: 'Invalid password' });

    // TO NOT RETURN THE PASSWORD
    user.password = undefined;

    return response.send({
      user,
      token: generateToken({ id: user.id }),
    });
  },

  async recoverPassword(request, response) {
    const { email } = request.body;

    try {
      const user = await User.findOne({ email });

      if (!user) return response.status(400).send({ error: 'User not found' });

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await User.findByIdAndUpdate(user.id, {
        $set: {
          passwordResetToken: token,
          passwordResetExpires: now,
        },
      });

      await mailer.sendMail(
        {
          to: email,
          from: 'edvaldojunior1310@gmail.com',
          subject: 'Test',
          template: 'forgot_password',
          context: { token },
        },
        (error) => {
          if (error)
            return response
              .status(400)
              .send({ error: 'Cannot send forgot password email' });

          return response.send();
        }
      );
    } catch (error) {
      return response
        .status(400)
        .send({ error: 'Error on forgot password, try again.' });
    }
  },

  async resetPassword(request, response) {
    const { email, token, password } = request.body;

    try {
      const user = await User.findOne({ email }).select(
        '+passwordResetToken passwordResetExpires'
      );

      if (!user) return response.status(400).send({ error: 'User not found' });

      if (token !== user.passwordResetToken)
        return response.status(400).send({ error: 'Token invalid' });

      const now = new Date();

      if (now > user.passwordResetExpires)
        return response
          .status(400)
          .send({ error: 'Token expired, generate a new one' });

      user.password = password;

      await user.save();

      return response.send();
    } catch (error) {
      response.status(400).send({ error: 'Cannot reset password, try again' });
    }
  },
};
