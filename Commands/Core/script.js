const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "π",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/FantoX001/Atlas-MD')
        let repo = repoInfo.data
        let txt = `      π§£ *${botName}'s HOME* π§£\n\n*β οΈ ππΎπΌπ°π½:-* https://chat.whatsapp.com/EmHKEG43PJTG7hTwwcdxif\n\n*β οΈ β­β­β­β ππππππ ββ­β­β­:-* https://chat.whatsapp.com/Ee7PXxxUR88CjepXyRnnq6 \n\n\n*Β©οΈ πππππππ - π·πΎπΏπ΄*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
