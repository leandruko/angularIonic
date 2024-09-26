import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir al login cuando la app inicie
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'docente', loadChildren: () => import('./docente/docente.module').then(m => m.DocentePageModule) },
  { path: 'alumno', loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
