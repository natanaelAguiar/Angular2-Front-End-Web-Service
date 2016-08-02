import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { CONTATO } from '../app-model/mock-contatos';
import { Contato } from '../app-model/contato';

import 'rxjs/add/operator/toPromise';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ContatoService{

    private contatoUrlBase = 'http://localhost:8080/contato/';
    private contatos: Contato[]

    constructor(private http: Http){}

    getContatos(){
        // return this.http.get(this.contatoUrlBase)
        // .toPromise()
        // .then(response =>response.json().data as Contato[])
        // .catch(this.handlerError);

        return this.http.get(this.contatoUrlBase+'contato')
        .map((responseData) => {return responseData.json()});
    }

    getContatoById(id: number){
        return this.http.get(this.contatoUrlBase+'findById/'+id)
        .map((responseData) => {return responseData.json()});

    }

    saveContato(contato: Contato){
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http.post(this.contatoUrlBase+'addContato', JSON.stringify(contato), {headers: headers})
        .map((responseData) => {return responseData.json()});
    }

    deleteById(contato: Contato) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.contatoUrlBase}removeById/${contato.id}`;

    return this.http.delete(url, {headers: headers});
  }



    private handlerError(error: any){
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}