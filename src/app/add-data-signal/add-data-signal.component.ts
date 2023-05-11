import { Component, OnInit } from '@angular/core';
import { DataSignal } from '../model/data-signal';
import { DataSignalService } from '../services/data-signal.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-add-data-signal',
  templateUrl: './add-data-signal.component.html',
  styleUrls: ['./add-data-signal.component.css']
})
export class AddDataSignalComponent implements OnInit{

  dataSignal: DataSignal=new DataSignal("","","",0,"","","","");
  dataSignals: any;
  message: any;
  showMessage: boolean;

  constructor(private dataSignalService:DataSignalService,
    public loaderService: LoaderService) { }

  ngOnInit() {
    this.getDataSignals();
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
    response.subscribe((data)=> {
      let dataObj = JSON.parse(data.toString());
      this.showMessage = true;
      this.message=dataObj.message;
      this.getDataSignals();
      setTimeout(() => {
        this.showMessage = false;
      }, 2500);
    }
    );
  }

  public getDataSignals(){
    let response=this.dataSignalService.getDataSignals();
    response.subscribe((data)=> {
      this.dataSignals=data;
    });
  }
  
}
