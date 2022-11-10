import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { ConfirmComponent } from './Components/confirm/confirm.component';
import { HomeComponent } from './Components/home/home.component';
import { VentasComponent } from './Components/ventas/ventas.component';
import { CapitulosComponent } from './Components/capitulos/capitulos.component';
import { OtrosComponent } from './Components/otros/otros.component';
import { RolComponent } from './Components/rol/rol.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sigin', component: SiginComponent },
  { path: 'conf', component: ConfirmComponent },
  { path: 'vents', component: VentasComponent },
  { path: 'cap', component: CapitulosComponent },
  { path: 'otros', component: OtrosComponent },
  { path: 'roles', component: RolComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
