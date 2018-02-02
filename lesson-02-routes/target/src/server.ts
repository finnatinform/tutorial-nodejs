import Express = require('express');

let Application = Express();

Application.route('/andreas')
    .get(onGetAndreas)
    .post(onPostAndreas) ;
    // put, del, patch, all etc.

function onGetAndreas(_Request: Express.Request, _Response: Express.Response): void {
    _Response.end('Andreas Get');
}
function onPostAndreas(_Request: Express.Request, _Response: Express.Response): void {
    _Response.end('Andreas Post');
}

Application.route('/finn')
    .get(onGetFinn)
    .post(onPostFinn) ;
    // put, del, patch, all etc.

function onGetFinn(_Request: Express.Request, _Response: Express.Response): void {
    _Response.end('Finn Get');
}
function onPostFinn(_Request: Express.Request, _Response: Express.Response): void {
    _Response.end('Finn Post');
}

// Static files
Application.use(Express.static('static'));

let Server = Application.listen(8080, function(){
    console.log(__dirname);
    console.log(`Server listening at http://${Server.address().address}:${Server.address().port}`);
});