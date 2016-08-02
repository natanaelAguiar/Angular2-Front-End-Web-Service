"use strict";
var router_1 = require('@angular/router');
var contato_component_1 = require('./contato.component');
var routes = [
    {
        path: '',
        redirectTo: '/contatos',
        pathMatch: 'full'
    },
    {
        path: 'contatos',
        component: contato_component_1.ContatoComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map