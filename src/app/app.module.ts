import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppComponent } from './app.component';

// Cambiar local aplicacion
import localesVen from '@angular/common/locales/es-VE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localesVen);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-VE' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
