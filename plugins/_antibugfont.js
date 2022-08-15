let handler = m => m

let linkRegex = /ℛ/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupFont = linkRegex.exec(m.text)
  if (chat.antiBugfont && isGroupFont) {
  this.reply(m.chat, '*「 ANTI BUG FONT 」*\n\n_Kamu akan dikeluarkan karena telah mengirim bug font di grup ini!_', m)
  this.reply(m.chat, '\n'.repeat(9999), m)
  this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
handler.group = true

export default handler
