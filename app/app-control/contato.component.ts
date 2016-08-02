import { Component, OnInit} from '@angular/core';

import  { Contato } from '../app-model/contato';
import { CONTATO }  from '../app-model/mock-contatos';
import { ContatoService } from './contato.service';

@Component({
    selector: 'my-contact',
    templateUrl: 'app/app-view/contato.component.html',
})
export class ContatoComponent implements OnInit {
    contatos: Contato[];
    oldContato = new Contato();
    btnDisable: boolean = false;
    error: any;

    constructor(private contatoService: ContatoService){}

    getHeroes(){
        // this.contatoService.getContatos().then(contatos => this.contatos = contatos);
        this.contatoService.getContatos().subscribe(res => this.contatos = res,
        error => console.error('Error: ' + error),
        () => console.log('Completed!'));
    }

    edit(contato: Contato){
        this.oldContato.id = contato.id;
        this.oldContato.nome = contato.nome;
        this.oldContato.email = contato.email;
        this.visibility(contato);
    }

    cancel(contato: Contato){
        if(contato.nome === undefined || contato.email === undefined) {
            this.dell(contato);
        }else{
            contato.id = this.oldContato.id;
            contato.nome = this.oldContato.nome;
            contato.email = this.oldContato.email;
        }
        this.visibility(contato);
    }

    visibility(contato: Contato){
        contato.visibled = !contato.visibled;
        this.btnDisable = !this.btnDisable;
    }

    add(){
        var newContato = new Contato;
        this.contatos.push(newContato);
        this.edit(newContato);
    }

    dell(contato: Contato){
        var index = this.contatos.indexOf(contato);
        this.contatoService.deleteById(contato).subscribe((res) => {this.contatos.splice(index,1);});
    }

    save(contato: Contato){
        this.contatoService.saveContato(contato)
                                       .subscribe(res => {
                                           if(contato.id == null){
                                                 contato.id = res.id;
                                           }
                                       });
        this.edit(contato);
    }

    ngOnInit(){
        this.getHeroes();
    }
}