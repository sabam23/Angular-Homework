import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './features/Form & Form-list/components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CurrencyConverterComponent } from './features/currency-converter/components/currency-converter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormListComponent } from './features/Form & Form-list/components/form-list/form-list.component';
import { LoginComponent } from './features/Form & Form-list/components/login/login.component';
import { TopbarComponent } from './features/topbar/components/topbar.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CurrencyConverterComponent,
    FormListComponent,
    LoginComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
