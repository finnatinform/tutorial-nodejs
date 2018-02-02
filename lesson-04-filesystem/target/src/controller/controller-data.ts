import Express = require('express');
import fs = require('fs-extra');

class DataControllerClass {
    constructor(){
        this.onPostData = this.onPostData.bind(this);
        this.onGetData = this.onGetData.bind(this);
    }

    public onPostData(_Request: Express.Request, _Response: Express.Response):void{
        _Response.end(JSON.stringify({ 'success' : this.saveData(_Request.body) }));
    }
    public onGetData(_Request: Express.Request, _Response: Express.Response):void{
        _Response.end( `Hey, ${this.loadData()} :)` );
    }

    private async saveData( _Data : any ):Promise<boolean>{
        try{
            await fs.ensureFile('./data.json');
            await fs.writeJson( './data.json' , _Data );
            return true ;
        }catch( _Error ){
            return false ;
        }
    }
    private async loadData():Promise<string>{
        try{
            let HResult = await fs.readJson('./data.json');
            return HResult.name ;
        }catch( _Error ){
            return '' ;
        }
    }
}

var DataController : DataControllerClass = new DataControllerClass();
export = DataController ;