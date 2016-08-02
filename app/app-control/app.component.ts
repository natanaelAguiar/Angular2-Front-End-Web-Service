import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ContatoComponent } from './contato.component';
import { CONTATO }  from '../app-model/mock-contatos';
import  { Contato } from '../app-model/contato';
import { ContatoService } from './contato.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app-view/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ContatoService]
    // styleUrls:['app-view/syles/app.component.css';
})
export class AppComponent{
}