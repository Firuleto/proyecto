import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent} from './pages/articulos/articulos.component';
import {AdminComponent} from './pages/admin/admin.component';
import { MenusComponent } from './pages/menus/menus.component';

const routes: Routes = [{
  path:'',
  component: MenusComponent,
  children: [{
    path: 'articulos',
    component: ArticulosComponent
  },{
    path: 'admin',
    component: AdminComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
