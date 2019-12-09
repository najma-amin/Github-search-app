import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'home', component: DisplayComponent},
  {path:'**', component: NotfoundComponent },
  {path: '', redirectTo:'home', pathMatch: 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
