module.exports = (req, res, next) => {
  console.log('logging middleware...');
  next();
};
