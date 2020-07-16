import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalestranteComponent } from './palestrante/palestrante.component';
import { EventosComponent } from './eventos/eventos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatosComponent } from './contatos/contatos.component';



const routes: Routes = [
  { path: 'eventos', component: EventosComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'palestrante', component: PalestranteComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
