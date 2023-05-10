import { Component, OnInit } from '@angular/core';
import { DataSignal } from '../model/data-signal';
import { DataSignalService } from '../services/data-signal.service';

@Component({
  selector: 'app-add-data-signal',
  templateUrl: './add-data-signal.component.html',
  styleUrls: ['./add-data-signal.component.css']
})
export class AddDataSignalComponent implements OnInit{

  dataSignal: DataSignal=new DataSignal("","","",0,"","","","");
  message:any;

  constructor(private dataSignalService:DataSignalService) { }

  ngOnInit() {
  }

  public addDataSignal(){

    let dataSignalObject = {
      "client_id": this.dataSignal.clientId,
      "symbol": this.dataSignal.symbol,
      "timeframe": this.dataSignal.timeframe,
      "price": this.dataSignal.price,
      "currency": this.dataSignal.currency,
      "base_currency": this.dataSignal.baseCurrency,
      "updated_time": this.dataSignal.updatedTime,
      "comments": this.dataSignal.comments
    }

    let response = this.dataSignalService.addDataSignal(dataSignalObject);
    response.subscribe((data)=>this.message=data);
  }
}
