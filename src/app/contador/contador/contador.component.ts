import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: ` 
    
            <h2>{{titulo}}</h2>
            <h2>La base es: <strong>{{base}}</strong></h2>
            <!-- <h2>{{ 1 + 3 }}</h2> -->


            <button (click)="acumular(base);">+ {{base}}</button>

            <!-- <button (click)=" numero = numero + 1;">+ 1</button> -->


            <span> {{ numero }} </span>

            <button (click)="acumular(-base) ;">- {{base}}</button>



    
    `
})

export class ContadorComponent{

    public titulo: string  = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    acumular(valor:number){
      this.numero += valor;
    }

}