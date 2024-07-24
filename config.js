

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hsncyber@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923183830766@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HsnCyber/LEGEND-X-HM";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajDL6mHFxP88HXtWG3F";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajDL6mHFxP88HXtWG3F";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HsnCyber/LEGEND-X-HM/main/asset/logo.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923183830766";
global.owner = process.env.OWNER_NUMBER || "923183830766";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/4dc85a29bee9f0fd24c71.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pqWXFrTmtJMjdZemN2aUJ3VDUvWVYxV3NyNHFGT2UrRjE5ZjRNNFpXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTlOai8xOHo4U3FEdFVMMjk1eWJYZXN6TWc3Y0p4Z1J4TytFcXZta0VoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTEp5NGFFZUM0aldSWWk4OHF6RzhDUEJKQVE0VjdRczhwdlVDNzNCUVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS3VDLzZYaXl5S0J4eDRuZUxmRXBFblNNcDlTMGo5aWh6L3IzeUIyQWxBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKdExLZUdYcDZ1QmZNSHUvQ0p5ME5PNFlpTWkwU1FWeXpxWmpFbHFjVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx4Q0dMa0NHbEtLa3Bra2J2V1poNHNBMFA0ODlZUndYdEw3SkpYY0RLVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JHZGlpWEJtejZxNE8rKzFnL1JyeHVhdmNEYkE4WW1yY25HQnZwK0swaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWRTcUpLSGR0cDRFeWg0NmhJUFp1SVdYOTVTYUNUeEJMbmxjOG5ETmtpOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLaFhCVVVTbm0xSWZDUDJnRVRZODByMks1dVg5U2xjbnYzOWlCNzRiZS9VRi9RaEZCc1YyMEthcDlnYnZCb0lLeFN3eDBmSTVCVFpmVVI4VjVuckJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJyQ0hVcTl0ajlUUEsvYjVQWmZPWGtqOUx6T29TNCsvRmxULzFvWEE5SkVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkMUNnYlo0d1M2S0ZRcUdnR3I5R2JRIiwicGhvbmVJZCI6IjE0ZDcxNzYxLWE5NzctNGEzNi05MWMzLTc1MzhkNTE4NjRhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNeTFRelVCMldGMTUxWDFnNnJTYkNlOGJ0djg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzE0THpvNmJLVnRjc0FZc0xPbjcwc0xBT0ZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJKV1A1VlNWIiwibWUiOnsiaWQiOiI5MjMxNjg1OTg4MDk6MjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3UzUrZ0VFTTNCZzdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdLTHQzUEQ0TnpJdEE2ZlcwL0RYKzc0TmFXTjMxSlVmTlQ5NGM2R00zRzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijh3U0tpNFhrbXl6MTZXVVJoeEpXVk9qMnh3eG1RU3NrMHI0NFpZMGdWUk5VWVhzTGlpSk8rYXhDZytUV0VzUDNqaXJtMmYzOUQvb1ZKd2x0L0hiRkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLemdZWm5adDVINHI5bThZUWJYb3dqWmwwL0hiUFpCVVRReVl2bjdaL2ZqMXEvM0UvT3RzdzlIb0xmMndvVWltZHlZeDk0a25pdEsvak9CMlJ3QitBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2ODU5ODgwOToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaWk3ZHp3K0RjeUxRT24xdFB3MS91K0RXbGpkOVNWSHpVL2VIT2hqTnh0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODE5MzUzfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Powered By LEGEND-X-HM",
  author: process.env.PACK_AUTHER || "Legend",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "LEGEND-X-HM",
  ownername: process.env.OWNER_NAME || "Hassan",
  errorChat: process.env.ERROR_CHAT || "923183830766",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "LEGEND").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
