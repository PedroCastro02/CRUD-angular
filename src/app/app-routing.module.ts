import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { VeiculosCrudComponent } from './views/veiculos-crud/veiculos-crud.component';
import { VeiculosCreateComponent } from './components/veiculos/veiculos-create/veiculos-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'veiculos', component: VeiculosCrudComponent },
  // { path: 'veiculos/create', component: VeiculosCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
