var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
require('dotenv').config();

var config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASS,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + '/../dist/',
  remoteRoot: '/public_html/',
  include: ['*'],
};

console.log(config);

ftpDeploy.deploy(config, function(err) {
  if (err) {
    throw new Error(err);
    process.exit(1);
  } else console.log('finished');
});
