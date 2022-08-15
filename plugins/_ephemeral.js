import { WAMessageStubType } from '@adiwajshing/baileys'

export function all(m, chatUpdate) {
    let chat = global.db.data.chats[chatUpdate.jid]
    switch (m.messageStubType) {
      case WAMessageStubType.CHANGE_EPHEMERAL_SETTING:
        if (chat.detect)
          this.sendMessage(chatUpdate.jid, +m.messageStubParameters[0] ?
            'Pesan Sementara ON' :
            'Pesan Sementara OFF'
            , 'extendedTextMessage')
        break
    }
    switch (m.mtype) {
      case 'protocolMessage':
        switch (m.msg.type) {
          case 3:
            if (m.isGroup) {
              let log = {
                key: m.key,
                content: m.msg,
                sender: m.sender
              }
              this.sendMessage(m.chat, ('*BUG GRUP TERDETEKSI!!!*\n\n' + await (await import 'util'.format(log))).padEnd(99999, '\n'), 'extendedTextMessage')
            }
            break
        }
        break
    }
}
