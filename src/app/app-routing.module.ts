import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BaseComponent } from './pages/base/base.component';
import { NovaAdmissaoComponent } from './pages/nova-admissao/nova-admissao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'nova-admissao' },
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: 'nova-admissao', component: NovaAdmissaoComponent }
    ],
  },
  { path: '**', component: NotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
