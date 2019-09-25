import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MultiparameterComponent } from './multiparameter/multiparameter.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    FollowerComponent,
    MultiparameterComponent,
    MyfollowerComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  //   RouterModule.forRoot(
  //     [
  //       {path:'',component:HomeComponent},
  //       {path:'page1',component:Page1Component},
  //       {path:'page2', component:Page2Component},
  //       {path:'follower/:id',component:FollowerComponent},
  //       {path:'myfollower',component:MyfollowerComponent},
  //       {path:'Multiparameter/:id/:username',component:MultiparameterComponent},
  //       {path:'**',component:NotfoundComponent}

  //     ]
  //   )
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
