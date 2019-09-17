import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import {FormsModule} from '@angular/forms';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDemoComponent,
    TwowayBindingComponent,
    NgifDirectiveComponent,
    ForDirectiveComponent,
    SwitchDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
