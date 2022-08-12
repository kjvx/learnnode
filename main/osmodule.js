const os = require('os');
const uptime = os.uptime();
const minup = uptime / 60;
console.log(minup);

const currentos = {
    name:os.type(),
    release:os.release(),
    tota:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentos);