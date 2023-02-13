module.exports = {
  name: "help",
  alias: ["menu", "h", "hope", "toman"],
  desc: "Gives all bot commands list",
  react: "🔮",
  category: "Core",
  start: async (Miku, m, {prefix,pushName,NSFWstatus}) => {
   let textHelpMenu = `Konichiwa *${pushName}* Senpai,
                 I am *${botName}*
My prefix is: *${prefix}*
Here's the list of my Commands.\n
   
*↫↫↫↫↫ { 👑 𝓬𝓸𝓻𝓮 👑 } ↬↬↬↬↬*
├・👑 ʜɪ, ʜᴇʟᴘ, 
├・👑 ᴄᴏᴜᴘʟᴇᴘᴘ, ᴏᴡɴᴇʀ, 
├・👑 ꜱᴄʀɪᴘᴛ, ꜱᴛᴀʟᴋ, 
├・👑 ꜱᴜᴘᴘᴏʀᴛ, ʀᴀɴᴋ
       ──────────────────
*↫↫↫↫↫ { 🔮 𝓖𝓻𝓸𝓾𝓹 🔮 } ↬↬↬↬↬*
├・🔮 ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
├・🔮 ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ, 
├・🔮 ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, ᴄʜᴀᴛʙᴏᴛɢᴄ, 
├・🔮 ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ, 
├・🔮 ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, 
├・🔮 ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ, 
├・🔮 ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, 
├・🔮 ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ, 
├・🔮 ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ, 
├・🔮 ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, 
├・🔮 ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
       ──────────────────
*↫↫↫↫↫ { 🔖 𝓜𝓸𝓭 🔖 } ↬↬↬↬↬*
├・🔖 ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ, 
├・🔖 ʙᴀɴ, ᴜɴʙᴀɴ, 
├・🔖 ʙᴀɴɢᴄ, ᴜɴʙᴀɴɢᴄ, 
├・🔖 ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ, 
├・🔖 ʙʀᴏᴀᴅᴄᴀꜱᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🔖 ᴍᴏᴅᴇ, ʙᴀɴʟɪꜱᴛ, 
├・🔖 ᴘᴍᴄʜᴀᴛʙᴏᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
├・🔖 ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ
       ──────────────────
*↫↫↫↫↫ { 📌 𝓣𝓘𝓜𝓔-𝓟𝓐𝓢𝓢 📌} ↬↬↬↬↬*
├・💫 ɪɢᴅʟ, ᴘʟᴀʏʟɪꜱᴛ, 
├・💫 ᴘʟᴀʏ, ʏᴛᴀᴜᴅɪᴏ, 
├・💫 ʏᴛᴠɪᴅᴇᴏ, ʏᴛꜱ
       ──────────────────
*↫↫↫↫↫ { 🔎 𝓢𝓔𝓐𝓡𝓒𝓗 🔍 } ↬↬↬↬↬*
├・🔎 ᴀɴɪᴍᴇ, ɢɪꜰꜱᴇᴀʀᴄʜ, 
├・🔎 ɢɪᴍᴀɢᴇ, ᴘɪɴᴛᴇʀᴇꜱᴛ, 
├・🔎 ɢɪᴛʜᴜʙ, ɢᴏᴏɢʟᴇ, 
├・🔎 ʟʏʀɪᴄꜱ, ʀɪɴɢᴛᴏɴᴇ, 
├・🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ, ᴡᴇᴀᴛʜᴇʀ, 
├・🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
       ──────────────────
*↫↫↫↫↫ { 🎗 𝓔𝓝𝓙𝓞𝓨 🎗 } ↬↬↬↬↬*
├・🎗 ᴇᴍᴏᴊɪᴍɪx, Q / Qᴜᴏᴛᴇ, 
├・🎗 ꜱᴛɪᴄᴋᴇʀ, ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ, 
├・🎗 ꜱᴛᴇᴀʟ, ᴛᴏᴀᴜᴅɪᴏ, 
├・🎗 ᴛᴏᴍᴘ3, ᴛᴏᴍᴘ4, 
├・🎗 ᴛᴏᴜʀʟ
       ──────────────────
*↫↫↫↫↫ { 💠 𝓘𝓶𝓪𝓰𝓮 𝓔𝓓𝓘𝓣 💠 } ↬↬↬↬↬*
├・💠 ʙʟᴜʀ, ᴄɪʀᴄʟᴇ, 
├・💠 ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ, 
├・💠 ᴛʀɪɢɢᴇʀ
       ──────────────────
*↫↫↫↫↫ { 🎼 𝒜𝓊𝒹𝒾𝑜 𝐸𝒹𝒾𝓉 🎼 } ↬↬↬↬↬*
├・🎼 ʙᴀꜱꜱ, ʙʟᴏᴡɴ, 
├・🎼 ᴅᴇᴇᴘ, ꜰᴀᴛ, 
├・🎼 ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ, 
├・🎼 ʀᴏʙᴏᴛ, ꜱʟᴏᴡ, 
├・🎼 ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ
       ──────────────────
*↫↫↫↫↫ { 🧩 𝓔𝓼𝓼𝓮𝓷𝓽𝓲𝓪𝓵𝓼 🧩 } ↬↬↬↬↬*
├・🧩 ᴇʟᴇᴍᴇɴᴛ, ɪɢᴜꜱᴇʀ, 
├・🧩 ꜱᴄʀᴇᴇɴꜱʜᴏᴛ, ꜱᴀʏ, 
├・🧩 ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, Qᴜᴇꜱᴛɪᴏɴ, 
├・🧩 ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
       ──────────────────
*↫↫↫↫↫ { 🎐 𝓦𝓔𝓔𝓑 🎐 } ↬↬↬↬↬*
├・ 🎐  ᴀɴɪᴍᴇQᴜᴏᴛᴇ, ᴄᴏꜱᴘʟᴀʏ, 
├・ 🎐  ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ, ꜰᴏxɢɪʀʟ, 
├・ 🎐  ᴍᴀɪᴅ, ᴡᴀʟʟᴘᴀᴘᴇʀ, 
├・ 🎐  ᴡᴀɪꜰᴜ
       ──────────────────
*↫↫↫↫↫ { 🏮 𝓡𝓔𝓐𝓒𝓣𝓘𝓞𝓝 🏮 } ↬↬↬↬↬*
├・ 🏮 ʙᴇʜᴀᴘᴘʏ, ʙɪᴛᴇ, 
├・ 🏮 ʙᴏɴᴋ, ʙᴜʟʟʏ, 
├・ 🏮 ᴄʀʏ, ᴅᴀɴᴄᴇ, 
├・ 🏮 ʜᴀɴᴅʜᴏɴᴅ, ʜᴀᴘᴘʏ, 
├・ 🏮 ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ, 
├・ 🏮 ᴋɪᴄᴋ, ᴋɪʟʟ, 
├・ 🏮 ᴋɪꜱꜱ, ᴘᴀᴛ, 
       ──────────────────
*↫↫↫↫↫ { ♻️ 𝓛𝓸𝓰𝓸 𝓜𝓪𝓴𝓮𝓻 ♻️ } ↬↬↬↬↬*
├・ ♻️ 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
├・ ♻️ 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
├・ ♻️ ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
├・ ♻️ ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
├・ ♻️ ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
├・ ♻️ ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
├・ ♻️ ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
       ──────────────────
*↫↫↫↫↫ { ♨️ 𝓡𝓟𝓖 ♨️ } ↬↬↬↬↬*
├・ ♨️ ʙᴜʏ, ɪɴᴠᴇɴᴛᴏʀʏ, 
├・ ♨️ ᴍɪɴᴇ, ᴍɪɴᴇᴄʀᴀꜰᴛ, 
├・ v ʀᴇɢ-ɪɴᴠ, ꜱʜᴏᴘ
       ──────────────────
*↫↫↫↫↫ { 🌐 𝐸𝒸𝑜𝓃𝑜𝓂𝒾𝒸𝓈 🌐 } ↬↬↬↬↬*
├・ 🌐 ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ, 
├・ 🌐 ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ, 
├・ 🌐 ɢᴀᴍʙʟᴇ, ʟʙ, 
├・ 🌐 ʀᴏʙ, ꜱʟᴏᴛ, 
├・ 🌐 ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ, 
├・ 🌐 ᴡɪᴛʜᴅʀᴀᴡ
 
       ──────────────────\n\n`

if (NSFWstatus == "true"){
  textHelpMenu += `╭────ꕥ NSFW ꕥ────╮
├
├・ 💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
├・ 💦 ɢᴇɴꜱʜɪɴ, ꜱQᴜɪʀᴛ,
├・ 💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
├・ 💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
├・ 💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
├・ 💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
├・ 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇx,
├・ 💦 ꜱᴇx2, ꜱᴇx3,
├・ 💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
├・ 💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
├・ 💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
├・ 💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏxɢɪʀʟ,
├・ 💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
├・ 💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
├・ 💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
├・ 💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
├・ 💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
├・ 💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
├・ 💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
├・ 💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
├・ 💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
├・ 💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
├・ 💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
├・ 💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
├・ 💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
├・ 💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
├・ 💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
├・ 💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
├・ 💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
├・ 💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
├・ 💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
├・ 💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
├・ 💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
├・ 💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
├・ 💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
├・ 💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
├・ 💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
├・ 💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
├・ 💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
├・ 💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
├・ 💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
├・ 💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
├・ 💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
├・ 💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
├・ 💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
├・ 💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
├・ 💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
├・ 💦 ʙᴏɴᴅᴀɢᴇ, ᴅᴇᴍᴏɴ,
├・ 💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
├・ 💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
├・ 💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ, ꜰɪɴɢᴇʀɪɴɢ 
├
╰──────────────────╯\n\n`
}

textHelpMenu +=`*🔰  ${botName}  🔰*
_Powered By:_ *Team ATLAS*
🎀 To use any of these commands type 
" *${prefix}Command name* ".
🏮 To get Support Group link type " *${prefix}support* ".
🧩 To report any issues to Developer type " *${prefix}report <describe issue>* ".\n`

let buttons = [
    {
      buttonId: `${prefix}repo`,
      buttonText: { displayText: "𝚉𝚎𝚛𝚘-𝚃𝚠𝚘" },
      type: 1,
    },
  ];
  let buttonMessage = {
    video: botVideo, gifPlayback: true,
    caption: textHelpMenu,
    footer: `*${botName}*`,
    buttons: buttons,
    headerType: 4,
  };

  await Miku.sendMessage(m.from, buttonMessage, { quoted: m });

  },
};
