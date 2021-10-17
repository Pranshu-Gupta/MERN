const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Get token from header
  const authToken = req.header('x-auth-token');

  //Check if no token
  if (!authToken) {
    return res.status(401).json({ msg: 'Auth token is null, authorization denied ' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(authToken, config.get('jwtSecret'));

    // @ts-ignore
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid! ' });
  }
};
