const { Client } = require('discord.js');
const bot = new Client;
const token = ""; // TOKEN BOT KAMU
var PREFIX = "!"; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot Sudah Online, Subscribe Yt Rama Putra')

    bot.user.setActivity("Register Bot By Rama Putra", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(bot.user.id)) {
        message.channel.send(`\nMy prefix for \`${message.guild.name}\` is \`${prefix}\` Type \`${prefix}help\` for help`);
    };

    case 'r':

            if(message.channel.type == "dm") return message.channel.send("**Tolong Registrasi Di Channel Yang Sudah Disediakan!**")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("*Mohon Berikan Nama Yang Lengkap Untuk Di Set!**")
                const nick = "[WARGA]" + args.join(" ")
            if(nick.length > 32) return message.channel.send("**Nickname Kamu Terlalu Panjang ,Tolong Dibenarkan Kembali!**")
             if (message.channel.id !== "857257140888797204") //id channel
                return message.channel.send("**Maaf Kamu Tidak Bisa Registrasi Disini ,Mohon Registrasi Ditempat Yang Disediakan!**");
            try {
                    message.member.roles.add("") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("**✅Accept! ,Terimakasih Telah Registrasi**");
                } catch(e) {
                    return message.channel.send("**Ada Sesuatu Command Yang Eror Mohon Hubungi Pengurus Yang Online!**")
                            }
            break;
    }
})

bot.login(token);
