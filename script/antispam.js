const fs = require('fs-extra');
const pathFile = __dirname + '/system/txt/antispam.txt';

module.exports["config"] = {
  name: "antispam",
  version: "1.0.0",
  role: 2,
  credits: "Markdevs69",
  info: "Turn on/off antispam mode.",
  commandCategory: "Admin",
  usages: "[on/off]",
  cd: 5,
};
module.exports["run"] = async ({ api, event, args }) => {
     if (args[0] == 'on') {
       fs.writeFileSync(pathFile, 'true');
       api.sendMessage('Antispam mode is now enable.', event.threadID, event.messageID);
     } else if (args[0] == 'off') {
       fs.writeFileSync(pathFile, 'false');
       api.sendMessage('Antispam mode is now disabled.', event.threadID, event.messageID);
     } else {
       api.sendMessage('Incorrect syntax', event.threadID, event.messageID);
     }
};