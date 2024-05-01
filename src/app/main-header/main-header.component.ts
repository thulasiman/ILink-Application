import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DataItem {
  empId: number;
  empName: string;
  companyName: string;
  empPosition: string;
}

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  componentName: string = ''; 
  apiUrl: string = 'http://localhost:15540/api/EDet';
  data: DataItem[] = [];
  firstItem: DataItem | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<DataItem[]>(this.apiUrl).subscribe(
      (response: DataItem[]) => {
        this.data = response;
        this.firstItem = this.data.length > 0 ? this.data[0] : undefined;
        console.log('Data:', this.data);
        console.log('First Item:', this.firstItem);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
