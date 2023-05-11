import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSignalService {

  constructor(private http:HttpClient) { }

  public addDataSignal(signal: any){
    return this.http.post("http://dashboardservice.us-east-2.elasticbeanstalk.com/data/api/v1/signals/addAppDataSignal",signal,{responseType:'text' as 'json'});
  }

  public getDataSignals(){
    return this.http.get("http://dashboardservice.us-east-2.elasticbeanstalk.com/data/api/v1/signals/appDataSignals");
  }
}
