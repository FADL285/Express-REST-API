const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Get X-Auth-Token from headers
  const token = req.header('X-Auth-Token');
  if (!token)
    return res.status(401).json({ status: 401, message: 'Unauthorized' });
  //  Check user role
  try {
    const decodedPayload = jwt.verify(token, config.get('jwt.secret'));
    if (!decodedPayload.adminRole)
      return res.status(403).json({ status: 403, message: 'Forbidden ' });
    next();
  } catch (error) {
    res.status(400).json({ status: 400, message: 'Invalid Token' });
  }
};
