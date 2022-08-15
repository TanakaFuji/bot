let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    if (m.messageStubType === 68) {
    this.reply(m.chat, '*VIRUS TERDETEKSI*\n\n_Kamu akan dikeluarkan dari grup karena telah mengirim virus!_', m)
    this.reply(m.chat, '\n'.repeat(9999), m)
    this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    await this.modifyChat(m.chat, 'clear', { includeStarred: false }).catch(console.log)
    }
}

export default handler
