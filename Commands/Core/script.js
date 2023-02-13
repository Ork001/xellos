const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "📁",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/FantoX001/Atlas-MD')
        let repo = repoInfo.data
        let txt = `      🧣 *${botName}'s HOME* 🧣\n\n*⚠️ 𝚃𝙾𝙼𝙰𝙽:* https://chat.whatsapp.com/JTTwcmElglZEKmPNrg8VRA\n\n*⚠️ ⭑⭑⭑★ 𝐁𝐎𝐍𝐓𝐄𝐍 ★⭑⭑⭑:* https://chat.whatsapp.com/CQKbWP7c3GNIk4SfE7Xej7\n\n\n*©️ 𝚁𝚎𝚐𝚊𝚛𝚍𝚜 - 𝙷𝙾𝙿𝙴*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
