import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
