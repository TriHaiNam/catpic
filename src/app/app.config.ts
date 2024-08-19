import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import {CatEffect} from "./ngrx/cat/cat.effect";
import {catReducer} from "./ngrx/cat/cat.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {profileReducer} from "./ngrx/profile/profile.reducer";
import {ProfileEffect} from "./ngrx/profile/profile.effect";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore({
      "cat": catReducer,
      "profile": profileReducer

    }),
    provideEffects(CatEffect, ProfileEffect),
    provideHttpClient(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"fir-owo-e8be6","appId":"1:79637567722:web:2b91126b7445c7d57edf93","storageBucket":"fir-owo-e8be6.appspot.com","apiKey":"AIzaSyD442kF0w9HPKuq0Y40Amz6GODwDqo-qxY","authDomain":"fir-owo-e8be6.firebaseapp.com","messagingSenderId":"79637567722"})), provideAuth(() => getAuth())]
};
