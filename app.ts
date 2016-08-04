import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import {disableDeprecatedForms, provideForms, NgForm} from "@angular/forms";
@Component({
    selector: "init-app",
    templateUrl :"template/layout.html",
    providers: [NgForm]
})
export class AppComponent {
    guardar(form: NgForm){
        console.log("Guardando la empresa de salud -> " + JSON.stringify(form.value));
    }
}

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms()]);