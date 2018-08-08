import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { GlobalNavService } from './global-nav/global-nav.service';

import { GlobalNavComponent } from './global-nav/global-nav.component';

@NgModule({
  declarations: [
    GlobalNavComponent
  ],
  imports: [
    BrowserModule,
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
