import Express = require('express');

class DataControllerClass {
    public onPostData(_Request: Express.Request, _Response: Express.Response):void{
        _Response.end( `Hey, ${_Request.body.name} :)` );
    }
    public onGetData(_Request: Express.Request, _Response: Express.Response):void{
        _Response.end( `Hallo Welt :)` );
    }
}

var DataController : DataControllerClass = new DataControllerClass();
export = DataController ;