import { tebaktebakan } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (id in conn.tebaktebakan) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaktebakan[id][0])
        throw false
    }
    const json = await tebaktebakan()
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tebak untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebaktebakan[id] = [
        await conn.sendButton(m.chat, caption, author, ['Bantuan', `${usedPrefix}tebak`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, ['Tebak Tebakan', '/tebaktebakan'], conn.tebaktebakan[id][0])
            delete conn.tebaktebakan[id]
        }, timeout)
    ]
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan$/i

export default handler