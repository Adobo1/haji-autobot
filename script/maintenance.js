const fs = require('fs-extra');
const pathFile = __dirname + '/system/txt/maintenance.txt';

module.exports["config"] = {
  name: "maintenance",
  version: "1.0.0",
  role: 3,
  credits: "Markdevs69",
  info: "Turn on/off Maintenance mode for bot creator.",
  commandCategory: "Admin",
  usages: "[on/off]",
  cd: 5,
};
module.exports["run"] = async ({ api, event, args }) => {
     if (args[0] == 'on') {
       fs.writeFileSync(pathFile, 'true');
       api.sendMessage('Maintenance mode is now enable.', event.threadID, event.messageID);
     } else if (args[0] == 'off') {
       fs.writeFileSync(pathFile, 'false');
       api.sendMessage('Maintenance mode is now disabled.', event.threadID, event.messageID);
     } else {
       api.sendMessage('Incorrect syntax', event.threadID, event.messageID);
     }
};