import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';
  notifications=2;
  notifications2=0;
  showSpinner=false;
  opened=false;
  selectedValue='';
  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }



}
