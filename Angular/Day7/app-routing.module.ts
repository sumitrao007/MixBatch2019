import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { MultiparameterComponent } from './multiparameter/multiparameter.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'page1',component:Page1Component},
  {path:'page2', component:Page2Component},
  {path:'follower/:id',component:FollowerComponent},
  {path:'myfollower',component:MyfollowerComponent},
  {path:'Multiparameter/:id/:username',component:MultiparameterComponent},
  {path:'**',component:NotfoundComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
