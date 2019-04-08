import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule,MatIconModule, MatCheckbox} from '@angular/material'; // Se importa el material para botones
// Badges
import {MatBadgeModule} from '@angular/material/badge';
//Spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//NavBar
import {MatToolbarModule} from '@angular/material/toolbar';
//Sidenav
import {MatSidenavModule} from '@angular/material/sidenav';
//Menu
import {MatMenuModule} from '@angular/material/menu';
//List
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
// Grid list
import {MatGridListModule} from '@angular/material/grid-list';
// Expansion Panel
import {MatExpansionModule} from '@angular/material/expansion';
// Cards
import {MatCardModule} from '@angular/material/card';
// Tabs
import {MatTabsModule} from '@angular/material/tabs';
// Stepper
import {MatStepperModule} from '@angular/material/stepper';
// Forms
import {MatFormFieldModule} from '@angular/material'
//Input
import {MatInputModule} from '@angular/material/input';
//Select
import {MatSelectModule} from '@angular/material/select';
// Autocomplete
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// CheckBox and RadioButtons
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
// DatePicker
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


// Se crea un arreglo donde se estaran importando los modulos a usar para solo agregarlos una vez y no escribir en el import y export lo mismo
const MaterialComponents=[
  MatButtonModule, // Se importa globalmente los botones a todos los componentes
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
