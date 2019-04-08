import { Component } from '@angular/core';

// Filter Autocomplete
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularMaterial';
  notifications=2;
  notifications2=0;
  showSpinner=false;
  opened=false;
  selectedValue='';
  selectedValue2='';

  //Dates
  minDate=new Date();
  // Los meses empiezan desde 0 en esta fecha, asi que esta fecha seria 10 de abril del 2019
  maxDate=new Date(2019,3,10);


  ngOnInit(){
    this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value =>this._filter(value))
    );
  }

  private _filter(value:string):string[]{
    const filteredValue=value.toLowerCase()
    return this.options.filter(option=>option.toLocaleLowerCase().includes(filteredValue));
  }



  options:string[]=[
    'Angular',
    'Vue',
    'React'
  ]
  objectOptions=[
    {name:'Angular'},
    {name:'React'},
    {name:'Vue'},
    {name:'Angular Material'}
  ];

  myControl=new  FormControl();

  filteredOptions: Observable<string[]>;

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }
  displayFn(subject){
    return subject ? subject.name : undefined;
  }

  //Date Filter
  dateFilter =date =>{
    const day=date.getDay();
    const month=date.getMonth();
    const year=date.getYear();

    const date2=new Date(2019,3,10);

    if(date.valueOf()===date2.valueOf()){
      console.log(date);
    }
    // 1900 se toma como referencia, y solo se suman o restan los demás años
    // En los date, los meses empiezan desde el 0
    // Para filtrar una fecha en especifico se puede utilizar la funcion valueOf()
    return day != 0 && day!=6 && month!=4 && date.valueOf()!=date2.valueOf()/*&& year!=119*/;
  }

}
