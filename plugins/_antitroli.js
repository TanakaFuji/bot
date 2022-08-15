export async function all (m) {
        if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('*Bug Troli Detected*\n\n_Bot akan membersihkan seluruh chat pada grup ini!_')
            // await this.clearMessage(m.chat, m.key)
            await this.modifyChat(m.chat, 'clear', { includeStarred: false }).catch(console.log)
       }
}
