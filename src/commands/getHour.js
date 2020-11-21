const getHours = msg => {
  const date = new Date;
  msg.reply(`Agora são ${date.getHours()} horas e ${date.getMinutes()} minutos`)
}

module.exports = getHours;