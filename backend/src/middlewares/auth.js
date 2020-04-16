const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response.status(401).send({ error: "Token not provided." });

  /**
   * A token is sent with two words bearer and hash
   * so we have to split them.
   **/

  const parts = authHeader.split(' ');

  if (!parts.lenght === 2)
    return response.status(401).send({ error: "Token error."});
  
  const [ scheme, token ] = parts;

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: "Token poorly formatted" });

  jwt.verify(token, authConfig.secret, (error, decoded) => {
    if (error) 
      return response.status(401).send({ error: "Invalid Token" });
    
    request.userId = decoded.id;

    return next();

  });
}