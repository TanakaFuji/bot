import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(tebak)/i.test(m.quoted.text) || /.*(tebak)/i.test(m.text)) return !0
    this.tebaktebakan = this.tebaktebakan ? this.tebaktebakan : {}
    if (!(id in this.tebaktebakan)) return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, ['Tebak Tebakan', '/tebaktebakan'], m)
    if (m.quoted.id == this.tebaktebakan[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebaktebakan[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.tebaktebakan[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebaktebakan[id][2]} XP`, author, ['Tebak Tebakan', '/tebaktebakan'], m)
            clearTimeout(this.tebaktebakan[id][3])
            delete this.tebaktebakan[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler