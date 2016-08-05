import { bootstrap } from "@angular/platform-browser-dynamic";
import {Component, Inject} from "@angular/core";
import {disableDeprecatedForms, provideForms, NgForm} from "@angular/forms";
import { HTTP_PROVIDERS } from '@angular/http';
import "rxjs/add/operator/map";
// Importar objetos de la librería http
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// Importar la clase Observable desde la librería rxjs
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: "init-app",
    templateUrl :"template/layout.html",
    providers: [NgForm]
})
export class AppComponent {
    private urlBase: string;

    constructor(@Inject(Http) private http: Http) {
        this.urlBase = "http://localhost:8080/api/entidad";
    }

    guardar(form: NgForm) {
        let body = JSON.stringify(form.value);
        this.pushEntidad(body).subscribe(
            res=> console.log("Success  pushEntidad"),
            err=> console.log("Error -> " + err),
            ()=> console.log("Finished")
        );
    }

    pushEntidad(body)  {
        console.log("Guardando -> " + body);
        //'application/x-www-form-urlencoded'
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers,  method: "post" });
        return this.http.post(`${this.urlBase}`, body, options)
            .map(res =>{console.log("Post Success");res.json()});
    }

}

bootstrap(AppComponent, [HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);