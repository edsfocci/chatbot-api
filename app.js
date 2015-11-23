var express = require('express'),
app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

var cleverbot = require("cleverbot.io"),
bot = new cleverbot("jXnOs9BOWAJfAFjq", "oyiNtSAq6Yqt2HveKfpGtl2i6mF0XHRC");

bot.create(function(err, session) {
});

//chatbotUrl = "http://www.personalityforge.com/api/chat/?apiKey=bB8oGuq803pLClvv&chatBotID=64022&message=<message>&externalID=<externalID>"

app.get('/', function(req, res) {
  console.log(url.parse(req.url, true).query.text);
  bot.ask(url.parse(req.url, true).query.text, function(err, response) {
    console.log(response);
  });
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
