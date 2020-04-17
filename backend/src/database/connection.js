const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'login-system-api';

mongoose.connect(`mongodb://${server}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports = mongoose;
