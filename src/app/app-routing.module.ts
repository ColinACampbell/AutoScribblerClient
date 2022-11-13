import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ScribblerComponent } from './scribbler/scribbler.component';

const routes: Routes = [{
  path: "" , component : AppComponent
},
{
  path: "app", component : ScribblerComponent, 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
