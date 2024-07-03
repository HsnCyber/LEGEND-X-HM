












// Fork And Edit AS You Wish //

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/Legendxd/Legend-MD' // Source URL
const number = '923135673658'
var name = ' LEGEND X HM'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/2c30fa9e6f61ef8ba03a2.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝐖𝐀𝐒𝐈 𝐓𝐄𝐂𝐇 𝐈𝐍𝐓𝐑𝐎  」
│ Name      : 𝐖𝐀𝐒𝐈 
│ Place       : 𝐈𝐒𝐋𝐀𝐌𝐀𝐁𝐀𝐃, 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍
│ Gender    :  𝐌𝐀𝐋𝐄
│ Age          : 20
│ education : 𝐁𝐒 𝐒𝐄 
│ good vibes : 𝐒𝐓𝐀𝐘 𝐂𝐋𝐀𝐌
│ Phone     : wa.me/923135673658
│ Youtube   : youtube.com/@New
│ GitHub    : https://github.com/ItxxLegend 

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["Legend","waso"],
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
