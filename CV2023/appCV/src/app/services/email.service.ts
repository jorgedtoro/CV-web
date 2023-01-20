import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  sendMessage(body: any) {
    console.log(body);
    return this.http.post(this.url, body);
  }
}
