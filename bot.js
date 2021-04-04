var TelegramBot= require('node-telegram-bot-api');
var token ='YOURTOKEN';
var bot = new TelegramBot(token,{polling:true});
var request =require('request');
bot.onText(/\/kur (.+)/,function (msg,match){
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
});
bot.onText(/\/movie (.+)/,function (msg,match){
   var chatId=msg.chat.id;
   var movie = match[1];
    request ('http://www.omdbapi.com/?apikey=d8d9e0e3&t='+ movie, function (error,response,body){
        var res = JSON.parse(body);
            if (!error && response.statusCode == 200) {
                bot.sendMessage(chatId, '_Looking for _' + movie + '...', {parse_mode: 'Markdown'})
                    .then(function (msg) {
                        bot.sendPhoto(chatId, res.Poster ,{caption: 'Title:' + res.Title +'\nYear:' + res.Year +'\nRated:' + res.Rated + '\nReleased:'+ res.Released +'\n Imdb:' + res.imdbRating})
                    })
            }



    });
});
    bot.onText(/\/corona (.+)/,function (msg,match){
        var chatId =msg.chat.id;
        var dates = match[1];
        request ('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json', function (error,response,body){
            var res = JSON.parse(body);
            if (!error && response.statusCode == 200) {
                bot.sendMessage(chatId, '_Looking for _' + dates + '...', {parse_mode: 'Markdown'})
                    .then(function (msg) {
                        bot.sendMessage(chatId, 'Country:'+'TURKEY'+ '\nDate:' + res[dates]['date']+ '\nTests:' + res[dates]['tests'] +'\nCases:' + res[dates]['cases'] +'\nPatients:' + res[dates]['patients'] +'\nCritical:' + res[dates]['critical']+'\nDeath:' + res[dates]['deaths'])
                    })
            }
        });
        });

