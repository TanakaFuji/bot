let handler = m => m

let linkRegex = /(|৪|๘|🧙AL⋆HARAM🔮|୧|୨|⫷⃢༒💦𝗩𝗜𝗥𝗨𝗦 𝗔𝗜𝗥💦༒⃢⫸|𝄤͜͡🇲🇭᭄ᮟʀͭʟͤ͢ɪͦɴᷛƌ𓃵⃟࿐✘𝕸𝖊𝖍𝖒𝖊𝖙🤬🖥️🔥|༺⃢🔥V̳I̳R̳U̳S̳ ̳A̳P̳I̳🔥⃢༻|✳️⃟⃢⃢⃢⃟⃟⃟⃟⃢⃢⃟⃟⃟⃢⃟⃟⃢⃢𝐌𝐀𝐃 𝐓𝐎𝐍𝐉𝐎𝐋⃟⃟⃟⃟⃟⃟⃟⃟⃢⃢⃢⃢⃢⃢⃢⃢⃢⃢✳️|☙.𝙼𝙰𝚍.𝚃𝙾𝙽𝚓𝙾𝙻|🇸 🇱 🇦 🇾 🇪 🇷 07™|༒⃢⃟⚡SLAYER PETIR⚡⃟⃢༒|9999999|ผิดุท้่เึางืผิดุท้่เึางื| 🥵「𖥂𝐑𝐀𝐅𝐈ᬊ𝐌𝐀𝐊𝚺𝐑 𖤛 𝐇𝚺𝐗𝐀ᬊ𝐌𝚯𝐃𝐒ツ」🤯҉꙰🫧 New Generation Virus🎌)/i //Tambah sendiri virtexnya

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupVirtex = linkRegex.exec(m.text)

  if (chat.antiVirtex && isGroupVirtex) {
  this.reply(m.chat, '*VIRTEX DETECTED*\n\n_Kamu akan dikeluarkan karena telah mangirim virtex di grup ini!', m)
  this.reply(m.chat, '\n'.repeat(9999), m)
  this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
handler.group = true

export default handler
