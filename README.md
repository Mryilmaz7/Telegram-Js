# Telegram-Js
Telegram-Bot-Rate-CoronaforTurkey-movie

Hi welcome my telegram-bot project,
This project gives turkey's daily corona number, movie information and exchange rate information.

I use webstrom and found the APIs.
"https://api.genelpara.com/embed/doviz.json"
"http://www.omdbapi.com/?apikey=d8d9e0e3&t="
"https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"

Let's look at the codes;


##This code allows us to connect to telegram bot;
"
var TelegramBot= require('node-telegram-bot-api');
var token ='YOURTOKEN';
var bot = new TelegramBot(token,{polling:true});
var request =require('request');
"
##This code allows the bot to message you
" bot.onText(/\/kur (.+)/,function (msg,match){
    var chatId =msg.chat.id;
    var money = match[1].toUpperCase();
     request ('https://api.genelpara.com/embed/doviz.json', function (error,response,body){
         var res = JSON.parse(body);
             if (!error && response.statusCode == 200) {
                 bot.sendMessage(chatId, '_Looking for _' + money + '...', {parse_mode: 'Markdown'})
                     .then(function (msg) {
                         bot.sendMessage(chatId, 'Price:' + res[money]['alis'])
                     })
             }
         });
         "
      
