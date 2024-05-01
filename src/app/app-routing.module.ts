import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: 'payment', component: PaymentComponent, data: { newWindow: true } },
  {path:'login',component:LoginComponent},
  {path:'main-header',component:MainHeaderComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }