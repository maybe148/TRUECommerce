import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
  withNoHttpTransferCache,
} from '@angular/platform-browser';

import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { provideConfig } from '@spartacus/core';

import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
//import { BpPopupComponent } from './shared/components/bp-popup/bp-popup.component';
import { OrderDetailsExtraInfoComponent } from './custom/order-details-extra-info/order-details-extra-info.component';

@NgModule({
  declarations: [
    AppComponent, 
    //BpPopupComponent,
    OrderDetailsExtraInfoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
  ],
  providers: [
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideClientHydration(withEventReplay(), withNoHttpTransferCache()),
    provideConfig({
      backend: {
        occ: {
          baseUrl:
            'https://api.c0e7q1gwe9-truemoveh1-d1-public.model-t.cc.commerce.ondemand.com',
          prefix: '/occ/v2/',
        },
      },
      context: {
        baseSite: ['powertools-spa'],
        language: ['en'],
        currency: ['USD'],
      },
      cmsComponents: {
        AccountOrderDetailsOverviewComponent: {
        component: OrderDetailsExtraInfoComponent,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}