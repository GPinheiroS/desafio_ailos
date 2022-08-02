import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { NovaAdmissaoComponent } from './pages/nova-admissao/nova-admissao.component';
import {NgxMaskModule} from "ngx-mask";
import { SharedLayoutModule } from 'src/shared/layout/layout.module';
import { SharedComponentsModule } from 'src/shared/components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaAdmissaoComponent,
    BaseComponent,
    NotfoundComponent
  ],
  imports: [
    SharedComponentsModule,
    SharedLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatBadgeModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
