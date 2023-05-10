export class DataSignal{
    constructor(
        public clientId:string,
        public symbol:string,
        public timeframe:string,
        public price:number,
        public currency:string,
        public baseCurrency:string,
        public updatedTime:string,
        public comments:string,
    ){}
}