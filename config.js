const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_58_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiKzhIQVpqRSs4dmtrRzFDUngzeXk2cWZvZmM1VDhMbFFvcFF1QkRmRHp3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzM4MzY2MjY5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTI4NjYyMTQ0RkEyNjk5QjBDOEU2NkQ5RTcyRTlEMzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MjQ4Mjc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3MzgzNjYyNjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QjU0MDYwMzQyNzcwRTVDRjNGN0M4QTBFQzk1NThDQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgyNDgyNzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDczODM2NjI2OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2RDUxRkQ4OTRGQTY0RjQ4N0MzMjk1MDVBMEVDNkU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI0ODI4MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzM4MzY2MjY5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkFFMjM4MDRERTcwOEZEREFCRjUxN0RFNkE0NkY1MjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MjQ4MjgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNqc3h2a2lMUkRtYTRsYTZVRTRqcHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFiZDQwOWEtNjUyMy00NzRjLWFhYTktM2JlNDRiNDZlYWU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDUsXG4gICAgICAyMCxcbiAgICAgIDQ1LFxuICAgICAgMjA2LFxuICAgICAgMjI5LFxuICAgICAgMTAzLFxuICAgICAgMTMsXG4gICAgICA5NSxcbiAgICAgIDE2MCxcbiAgICAgIDIxMyxcbiAgICAgIDI0MCxcbiAgICAgIDE4MixcbiAgICAgIDg3LFxuICAgICAgNzYsXG4gICAgICAxOTYsXG4gICAgICAxMDYsXG4gICAgICAyNDMsXG4gICAgICA1OSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAyMTEsXG4gICAgICAyMTUsXG4gICAgICAyOCxcbiAgICAgIDM1LFxuICAgICAgMTczLFxuICAgICAgMTc2LFxuICAgICAgMjMwLFxuICAgICAgMTk4LFxuICAgICAgMjI3LFxuICAgICAgMTUzLFxuICAgICAgMSxcbiAgICAgIDIxNyxcbiAgICAgIDgyLFxuICAgICAgMTU5LFxuICAgICAgMTMxLFxuICAgICAgMTYwLFxuICAgICAgOTksXG4gICAgICA4MixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ1UEwzTTM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDczODM2NjI2OTY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA3NzY1NTc4MTEzMjUxOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+ro1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tlSHB1VUhFTTd6aTdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGptREZneGJuWitGM3EvSjlVY0FuL01tNjJNYmhlc1NSRVFoOXB3TEQwZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEZlNEcWtnSFpOMGU4SndIdkNTbzZOK1RlZkNOOWZNVUV4SDdHUTBUcEZxcnA5NWcxOVd4NzhwWWZrdG5laTdncXA3YmFPeEJNWmI2akxicXE4NkFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHUkJ3TmUzWHFML0lZa2FqTExLZG1WTjU3RCtyeVVRVlpmcCt1Wmt6YmhJYlVUaVB2RXVQbUoyVWE1Q3BPRlRQdU5ERUNDYWc5V3ZQNGpodzNmZ3BCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDczODM2NjI2OTY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgyNDgyNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHaEtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdoSy5qc29uIjogIntcImtleURhdGFcIjpcImZnVUxUNk5NblF4Z0J6dXcxR3J1VVFMVmZEMFYyNnJmK1hPNXZWT1pxbDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MTQ4NDA3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MjQ4Mjc3MzU2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
