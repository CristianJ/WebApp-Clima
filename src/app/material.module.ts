import { ModalClimaComponent } from './componentes/modal-clima/modal-clima.component';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({

  imports: [
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule

  ],
  exports: [
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  entryComponents:[
    ModalClimaComponent
  ]

})

export class MaterialModule {}
