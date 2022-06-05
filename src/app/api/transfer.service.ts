import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) {}

  postTransfer(transferData: any): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/transfer`, transferData);
  }

}
