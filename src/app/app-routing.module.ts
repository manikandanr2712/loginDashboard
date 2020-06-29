import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },{
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,    
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
