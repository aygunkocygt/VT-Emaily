if (process.env.NODE_ENV === 'production'){
  // production kısmı - return prod keys
  module.exports = require('./prod');
} else{
  // development kısmı - return dev keys
   module.exports = require('./dev');
}