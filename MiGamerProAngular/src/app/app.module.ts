import { NgModule, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from "./app-routing.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {AngularMaterialModule} from "./angular-material.module";
import {ModalModule} from "ngx-bootstrap/modal";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        FontAwesomeModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
      RouterOutlet
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
