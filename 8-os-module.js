const os = require('os');
const { uptime } = require('process');

//info about current user

const user= os.userInfo();

console.log(user);


//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),

}

console.log(currentOS);