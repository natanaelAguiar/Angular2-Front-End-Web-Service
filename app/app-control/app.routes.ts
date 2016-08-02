import { provideRouter, RouterConfig }  from '@angular/router';

import { ContatoComponent} from './contato.component';

const routes: RouterConfig = [
{
    path: '',
    redirectTo: '/contatos',
    pathMatch: 'full'
},
{
    path: 'contatos',
    component: ContatoComponent
}

];

export const appRouterProviders = [
    provideRouter(routes)
];