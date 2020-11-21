const getHours = require('../commands/getHour');
const getDay = require('../commands/getDay');

const messageController = (msg) => {
  const message = msg.content.toLowerCase();

  switch (message) {
    case 'que horas são?':
      getHours(msg);
    case 'que dia é hoje?':
      getDay(msg);
      break;
    
    default:
      break;
  }
}

module.exports = messageController;