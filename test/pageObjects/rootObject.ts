export default class RootObject{
    constructor(){}
        open(path?:string) : void{
            if(path){
                browser.url(path)
            } browser.url('')

        }
    }
