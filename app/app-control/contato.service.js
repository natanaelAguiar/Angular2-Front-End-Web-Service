"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
// Observable class extensions
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/do');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var ContatoService = (function () {
    function ContatoService(http) {
        this.http = http;
        this.contatoUrlBase = 'http://localhost:8080/contato/';
    }
    ContatoService.prototype.getContatos = function () {
        // return this.http.get(this.contatoUrlBase)
        // .toPromise()
        // .then(response =>response.json().data as Contato[])
        // .catch(this.handlerError);
        return this.http.get(this.contatoUrlBase + 'contato')
            .map(function (responseData) { return responseData.json(); });
    };
    ContatoService.prototype.getContatoById = function (id) {
        return this.http.get(this.contatoUrlBase + 'findById/' + id)
            .map(function (responseData) { return responseData.json(); });
    };
    ContatoService.prototype.saveContato = function (contato) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.contatoUrlBase + 'addContato', JSON.stringify(contato), { headers: headers })
            .map(function (responseData) { return responseData.json(); });
    };
    ContatoService.prototype.deleteById = function (contato) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.contatoUrlBase + "removeById/" + contato.id;
        return this.http.delete(url, { headers: headers });
    };
    ContatoService.prototype.handlerError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ContatoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContatoService);
    return ContatoService;
}());
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map