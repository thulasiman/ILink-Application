import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HttpClient, HttpBackend, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PaymentComponent,
    LoginComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: (backend: HttpBackend) => {
        return new HttpClient(backend); // Create HttpClient with the provided backend
      },
      deps: [HttpBackend],
    },
    {
      provide: HttpHandler,
      useValue: {
        handle(request: HttpRequest<any>): Observable<any> {
          // Implement your custom handling logic here, e.g., using fetch API
          return new Observable<any>(); // Just a placeholder for now
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }