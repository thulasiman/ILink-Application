import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl: string = 'https://localhost:7232/api/PayDetails';

  constructor(private http: HttpClient) {}

  // Method to get payment details
  getPaymentDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        return throwError('Error fetching payment details');
      })
    );
  }
  

  // Method to submit a payment
  submitPayment(newPayment: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post<any>(this.apiUrl, newPayment, { headers: headers }).pipe(
      catchError(error => {
        return throwError('Error submitting payment');
      })
    );
  }
  

  // Method to delete a payment
  deletePayment(paymentId: number) {
    return this.http.delete(`${this.apiUrl}/${paymentId}`);
  }
}
