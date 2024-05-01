import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private apiUrl = 'YOUR_API_URL'; // Replace with your API URL
 
  constructor(private http: HttpClient) {}
 
  loginn(email: string, password: string): Observable<any> { // Change method name to 'loginn'
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}