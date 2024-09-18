//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVQZEFCa3BkWUJFL0VFOW1FTDg1U1BwVnVhYmI3THU2Zm4xamlhb0ZXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUx3Z2VHMU9Cc3hOMnlzdzY5ejY0d1Nnd0ZsT1ZrNHNXZi9sbHJ1RnNYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSjJtdDdweklzK1hoUE5VU1R0YUl2SFdLV2hrdXcwUlJudXdjKzJWNEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2b3BFV1lXM2xoQi91c3RDT2R4VytxYlpNZVUwVHdzQW1YelFvWEFiWndrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIamYxblVxMFg0ajBtK2FjMkYxTFV0d0FreHI1QVRsZnp6NndCMDZMVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndwV1Mzb1oxSU9JeUl2WGRFZnBhemd0QmgyMFVaTnVNV3lMbS9yTE5XZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lGaE9Wb1Y3QlBUVHlYdVhwQ2pOSTlPRkN2LytTQjZHdDVTZDlQQzFXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnVXN1BIRXk5VlZWbUlUeHR4b3NGRjhXd3JRRDdXN1dNRlhqckYyQ0Eyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4zemVwM0RTVjcwVVA2RVlLcEdsVWpENmF3OXJMRXVyOVdNYUdiaWFoTUZKb0ExUEZRR0RrNkhEK240Q2JJdG5yMWorTFBjMTNxbGk4VDJpTm1HQmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJaYXRWajRKd0JlZzZReWlhUC9QK1piN1ZhcjZZUWVsZFAxV2xZeVQ0Z3QwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NjgyMTc2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQTUzRjZCODE5RUM2QTVCRDNCN0Q5NkE3ODZBQzAyMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NjcxMjEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDNlg5bDRuRlNtcXFzZmtSREM1NFpnIiwicGhvbmVJZCI6IjZiYTY3ZjI1LWM3M2YtNDQ0Ny1hYzcwLTE3YmM5NDgxYzVhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQaC96Mk9abkkxZEk1OTd1c2NPcWczRE94NGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjNvOEJmS0NocnZMazhkVE9CdUVXUHcyNDRNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllUVjM4NDdBIiwibWUiOnsiaWQiOiIyNjM3NzY4MjE3NjY6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUmlkZGxlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0xCem53UTJ0S3J0d1lZQ3lBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia0dFdlB0NjdobFRBam5wQkp4V25mYkluUDVsQXkwekQ0SHpjck9HdXhCdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1pRUGgzdmZxYzFQODZBZlNMd04zUklGcFJId3NSalVEN3E4M3hUQUtoZng1YkFQUDhKSi84LzJkZ1JWSTR3Q2dWVUdrMzM3QkRpVm81Zm9TSDJQRHc9PSIsImRldmljZVNpZ25hdHVyZSI6InlrclFxT2NWeGxQWFVWVVlObjNzbHVFWk54Z2RoaFl5TG5yeEhDUVdHUUVrbVdxMGVCYnVwbG9kMzE0SmRSSnBwVUl4aU05amt3THZUVExqQjVWSmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc2ODIxNzY2OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpCaEx6N2V1NFpVd0k1NlFTY1ZwMzJ5SnorWlFNdE13K0I4M0t6aHJzUWMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY2NzEyMDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQks2In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
