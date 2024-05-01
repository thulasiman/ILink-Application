
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardOwnerName: string = '';
  cardNumber: string = '';
  securityCode: number | undefined;
  validThrough: string = '';
  showResult: boolean = false;
  paymentDetails: any[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.loadPaymentDetails();
  }



  submitPayment() {
    if (!this.cardOwnerName || !this.cardNumber || !this.securityCode || !this.validThrough) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    const newPayment = {
      cardOwnerName: this.cardOwnerName,
      cardNumber: this.cardNumber,
      securityCode: this.securityCode,
      validThrough: this.validThrough
    };
  
    // Call the submitPayment method of PaymentService
    this.paymentService.submitPayment(newPayment).subscribe(
      (response) => {
        // Handle successful response
        this.paymentDetails.push(response);
        this.showResult = true;
        this.clearForm();
      },
      (error) => {
        // Handle error response
        console.error('Error submitting payment:', error);
      }
    );
  }
  
  deletePayment(paymentId: number) {
    this.paymentService.deletePayment(paymentId).subscribe(
      () => {
        console.log('Payment deleted successfully.');
        // After successful deletion, reload payment details
        this.loadPaymentDetails();
      },
      (error) => {
        console.error('Error deleting payment:', error);
      }
    );
  }
  
  



    loadPaymentDetails() {
    this.paymentService.getPaymentDetails().subscribe(
      (response) => {
        this.paymentDetails = response;
        this.showResult = this.paymentDetails.length > 0;
      },
      (error) => {
        console.error('Error fetching payment details:', error);
      }
    );
  }

  clearForm() {
    this.cardOwnerName = '';
    this.cardNumber = '';
    this.securityCode = undefined;
    this.validThrough = '';
  }
}
