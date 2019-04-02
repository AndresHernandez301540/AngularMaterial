import { NgModule } from '@angular/core';
import {MatButtonModule,MatButtonToggleModule,MatIconModule} from '@angular/material'; // Se importa el material para botones

// Se crea un arreglo donde se estaran importando los modulos a usar para solo agregarlos una vez y no escribir en el import y export lo mismo
const MaterialComponents=[
  MatButtonModule, // Se importa globalmente los botones a todos los componentes
  MatButtonToggleModule,
  MatIconModule
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
