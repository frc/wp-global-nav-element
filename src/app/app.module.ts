import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { GlobalNavService } from './global-nav/global-nav.service';

import { GlobalNavComponent } from './global-nav/global-nav.component';

const config = { 
  apiKey: "AIzaSyD4ACaSUieDKMJMRH3vTlJPkl4lD38qoj0",
  authDomain: "wordpress-global-nav-67052.firebaseapp.com",
  databaseURL: "https://wordpress-global-nav-67052.firebaseio.com",
  projectId: "wordpress-global-nav-67052",
  storageBucket: "wordpress-global-nav-67052.appspot.com",
  messagingSenderId: "34893503013"
};
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    GlobalNavComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [GlobalNavService],
  bootstrap: [],
  entryComponents: [
    GlobalNavComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(GlobalNavComponent, { injector: this.injector });
    customElements.define('wp-global-nav', el);
   }
}
