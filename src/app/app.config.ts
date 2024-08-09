import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import {CatEffect} from "./ngrx/cat/cat.effect";
import {catReducer} from "./ngrx/cat/cat.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore({
      "cat": catReducer
    }),
    provideEffects(CatEffect),
    provideHttpClient(), provideAnimationsAsync()]
};
