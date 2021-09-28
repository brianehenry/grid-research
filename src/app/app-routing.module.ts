import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RevoComponent } from './revo/revo.component';

const routes: Routes = [
  { path: '', component: RevoComponent },
  { path: 'revo', component: RevoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
