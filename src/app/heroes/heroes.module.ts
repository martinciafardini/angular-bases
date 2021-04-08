import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [  
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //indico que cosas quiero hacer públicas o visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [ //aca adentro van módulos
        CommonModule
    ]
})
export class HeroesModule {

}