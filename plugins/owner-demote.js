import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
     let user = m.mentionedJid && m.mentionedJid[0]
     await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
     m.reply('Berhasil mendemote user!')
}
handler.help = ['demote', 'dm'].map(v => 'o' + v + ' @user')
handler.tags = ['group']
handler.command = /^(odemote|odm)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true

export default handler