import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app-control/app.component';
import { XHRBackend } from '@angular/http';
import {appRouterProviders} from './app-control/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app-model/in-memory-data.service';

bootstrap(AppComponent,[
    appRouterProviders,
    HTTP_PROVIDERS
        ]);