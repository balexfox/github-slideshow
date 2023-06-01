const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_TOKEN' на ваш собственный токен, полученный от BotFather
const token = '6064337236:AAHY3CC8dGAFOZTETeAlQHfbkPzmgEOoscE';

// Создание экземпляра бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик всех входящих сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Проверяем наличие входящего сообщения
  if (text) {
    // Проверяем, содержит ли текст сообщения фразу "salam" (без учета регистра)
    if (text.toLowerCase().includes('salam')) {
      // Отправляем ответное сообщение
      bot.sendMessage(chatId, 'Ualeikum assalam');
    }
  }
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // Отправляем приветственное сообщение
  bot.sendMessage(chatId, 'Привет! Я бот, отвечающий на сообщение "salam" с текстом "ualeikun assalam".');
});

// Запуск бота
bot.on('polling_error', (error) => {
  console.log(error);
});