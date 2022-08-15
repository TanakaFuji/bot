import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
	if (!text) throw 'Masukan input!\n\nGunting\nBatu\nKertas'
	let res = await fetch(global.API('xteam', '/game/suit', { q: text }, 'APIKEY'))
	let json = await res.json()
	let capt = `Hasil: ${json.hasil}\nKamu: ${json.jawabanmu}\nBot: ${json.jawabanbot}\n\nPoin: ${json.poin}`
	m.reply(capt)
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^suit$/i

export default handler