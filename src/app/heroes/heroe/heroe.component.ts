import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 34;

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`; //con estas comillas invertidas creo un template literal, creo un string
    }

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 50;
    }
}