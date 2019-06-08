var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  username: process.env.FTPUSERNAME,
  password: process.env.FTPPASS,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + '/../dist/',
  remoteRoot: '/',
  include: ['*'],
};

ftpDeploy.deploy(config, function(err) {
  if (err) throw new Error(err);
  else console.log('finished');
});
