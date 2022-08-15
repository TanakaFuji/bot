let handler = m => m

let linkRegex = /📄.PHILIP_RASHAN                                                             📄.PHILIP_RASHAN/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupPhilip = linkRegex.exec(m.text)
  if (chat.antiPhilip && isGroupPhilip && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
  m.reply('*「 ANTI PHILIP 」*\n\n' + import 'util'.format(m.key) + '\n'.repeat(9999))
  this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  m.reply('Tandai grup telah dibaca!')
  }
}
handler.group = true

export default handler
