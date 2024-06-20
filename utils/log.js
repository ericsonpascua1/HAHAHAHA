const con = require('./../config.json');
const theme = con.DESIGN.Theme;

let error;
if (theme.toLowerCase() === 'blue' || theme.toLowerCase() === 'fiery' || theme.toLowerCase() === 'red') {
  error = (text) => `[ ERROR ] ${text}`;
} else {
  error = (text) => `[ ERROR ] ${text}`;
}

module.exports = (text, type) => {
  switch (type) {
    case 'warn':
      process.stderr.write(error(text) + '\n');
      break;
    case 'error':
      console.log(`[ ERROR ] ${text}\n`);
      break;
    case 'load':
      console.log(`[ NEW USER ] ${text}\n`);
      break;
    default:
      process.stderr.write(`[ ${String(type).toUpperCase()} ] ${text}\n`);
      break;
  }
};

module.exports.error = (text, type) => {
  process.stderr.write(`» ${type} « ${text}\n`);
};
module.exports.err = (text, type) => {
  process.stderr.write(`[ ${type} ] ${text}\n`);
};
module.exports.warn = (text, type) => {
  process.stderr.write(`[ ${type} ] ${text}\n`);
};
module.exports.loader = (data, option) => {
  switch (option) {
    case 'warn':
      process.stderr.write(`[ SYSTEM ] ${data}\n`);
      break;
    case 'error':
      process.stderr.write(`[ SYSTEM ] ${data}\n`);
      break;
    default:
      console.log(`[ SYSTEM ] ${data}`);
      break;
  }
};
