export default class AppEnvironement
{
    static IS_PROD : boolean = true
    static  URL: string = AppEnvironement.IS_PROD ? "https://auto-scribbler-api.herokuapp.com" : "http://localhost:3000"
}