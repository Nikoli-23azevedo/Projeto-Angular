import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DicasComponent } from './dicas/dicas.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SobreComponent } from './sobre/sobre.component';

// src/app/app.routes.ts

// Defina suas rotas normalmente
const routes = [
  { path: '', component: HomeComponent },
  { path: 'dicas', component: DicasComponent },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'sobre', component: SobreComponent }
];

// Exporte a constante `routes` como padrão
export default routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }