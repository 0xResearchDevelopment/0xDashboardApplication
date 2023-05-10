import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataSignalComponent } from './add-data-signal/add-data-signal.component';

const routes: Routes = [
  {path:"",redirectTo:"addDataSignal",pathMatch:"full"},
   {path:"addDataSignal",component:AddDataSignalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
