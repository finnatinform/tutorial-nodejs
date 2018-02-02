import Express = require('express');

let Application = Express();

// Hello World
Application.get('/',onCallServer);
function onCallServer( _Request : Express.Request, _Response : Express.Response ):void{
    _Response.end('Hallo Welt');
}

// es geht natürlich auch
Application.post('/',onCallServer);
Application.put('/',onCallServer);
Application.delete('/',onCallServer);
Application.patch('/',onCallServer);

// oder einfach:
Application.all('/',onCallServer);

// Static files
Application.use(Express.static('static'));

let Server = Application.listen(8080, function(){
    console.log(__dirname);
    console.log(`Server listening at http://${Server.address().address}:${Server.address().port}`);
});