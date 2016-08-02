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
var contato_1 = require('../app-model/contato');
var contato_service_1 = require('./contato.service');
var ContatoComponent = (function () {
    function ContatoComponent(contatoService) {
        this.contatoService = contatoService;
        this.oldContato = new contato_1.Contato();
        this.btnDisable = false;
    }
    ContatoComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.contatoService.getContatos().then(contatos => this.contatos = contatos);
        this.contatoService.getContatos().subscribe(function (res) { return _this.contatos = res; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    ContatoComponent.prototype.edit = function (contato) {
        this.oldContato.id = contato.id;
        this.oldContato.nome = contato.nome;
        this.oldContato.email = contato.email;
        this.visibility(contato);
    };
    ContatoComponent.prototype.cancel = function (contato) {
        if (contato.nome === undefined || contato.email === undefined) {
            this.dell(contato);
        }
        else {
            contato.id = this.oldContato.id;
            contato.nome = this.oldContato.nome;
            contato.email = this.oldContato.email;
        }
        this.visibility(contato);
    };
    ContatoComponent.prototype.visibility = function (contato) {
        contato.visibled = !contato.visibled;
        this.btnDisable = !this.btnDisable;
    };
    ContatoComponent.prototype.add = function () {
        var newContato = new contato_1.Contato;
        this.contatos.push(newContato);
        this.edit(newContato);
    };
    ContatoComponent.prototype.dell = function (contato) {
        var _this = this;
        var index = this.contatos.indexOf(contato);
        this.contatoService.deleteById(contato).subscribe(function (res) { _this.contatos.splice(index, 1); });
    };
    ContatoComponent.prototype.save = function (contato) {
        this.contatoService.saveContato(contato)
            .subscribe(function (res) {
            if (contato.id == null) {
                contato.id = res.id;
            }
        });
        this.edit(contato);
    };
    ContatoComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ContatoComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            templateUrl: 'app/app-view/contato.component.html',
        }), 
        __metadata('design:paramtypes', [contato_service_1.ContatoService])
    ], ContatoComponent);
    return ContatoComponent;
}());
exports.ContatoComponent = ContatoComponent;
//# sourceMappingURL=contato.component.js.map