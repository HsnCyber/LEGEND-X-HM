

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
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JqbVlJVmJiUCtUNjNodlFRWTR3S2c1SStUeFVscGFxb1hoem5PYzkyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnF4TXFvbTVLaGZ0eXF3R3VtUjlsazNQL2kzUDZ6MWFRV2tUcUhCSnVCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0REZ4S2JHMTZHQ0VIZ05hRjhCSGJVU3h0Q1h0RXZPNmdISmtPR1ZVVEhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWXBOa2YySnNIU0V4eEVseitDVHh2VXU0S3lqMWI2RGJDeSs5bnh1SXljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGeTBJalJHWHRwSG93SjlyUVhndytTVWRBZzJ4b1plRDk4K0pDQmlSRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlwZFlpb1BFdFVtSVZ5ZjlrNHZXYml2ZEQzWHNweTVmVGJPb3B6QklmVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNzUU5CdlUrMGhCdGRZcGM0Szc3SkFFUUJvUmwxdTA0bnhJa1dPMHkzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG9VdUd4YnFtU1dJVVdLeUhORGRTaUhqV2lyYWJmWHZYTktQQWZIc3ZWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8vTTNxdk5UaGgyUyszSWhiM0w2T2NxRm9ybWdzb0Rxb1B5MEFoa2JJaDBBS0N4cExybnBTWUtpa2NWR2RCZkdrLzIvZG1jNTZWeFhzNjlhYzN6SmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJEeUhnZjZ1ZlZNalhhWmZoVzJ1WFlMMVNGTjRRcnFQOGVlZDZkTy90RmtFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKbTVjd29MNlJEaWExNGJKYzJYcmpRIiwicGhvbmVJZCI6IjFiMjU1ZDYxLTcwY2EtNDIyYS04YzlhLWY1OGYwZGMwNmIyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxVmtCYlZQbXZRM2hya1hKT2ZaSHBINURtTUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlJrYnlMQWk3RFlGU0FYSXM4L3RlTGxJOXdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRIREZHSDQ1IiwibWUiOnsiaWQiOiI5MjMxNjg1OTg4MDk6MjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozUzUrZ0VFUGU4Z3JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdLTHQzUEQ0TnpJdEE2ZlcwL0RYKzc0TmFXTjMxSlVmTlQ5NGM2R00zRzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJ4cThoZGJRWDQ4V3Jsa3ZOaWVLaUx5cHdlVmxIWUo0WVU1Z1dnUDB2c0JuWUp4a3haNzFxTXBYNUJFdkY3SCthcWxseUUxclpMK0lYdDZCMmthNUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiSGQ3VWRLRWo3TUlXUVpBTFJTbGg1Y0R6TXJXRHpDL0JFYUpEYTIwNFh5TDY2N3liRE0xcUdvM1hKaHFOTVdyTTR0S05kaE1CMXo2NzJwajNyNjBoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2ODU5ODgwOToyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaWk3ZHp3K0RjeUxRT24xdFB3MS91K0RXbGpkOVNWSHpVL2VIT2hqTnh0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODAyMzcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJWYyJ9"
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
