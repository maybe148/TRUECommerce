import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BpInfoResponseItem {
  ItemCode?: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class BpInfoService {
  private readonly apiUrl =
    'https://true.test01.apimanagement.ap11.hana.ondemand.com:443/API/CX/ZCXINO01/GetBPInformation';

  constructor(private http: HttpClient) {}

  getBpInformation(dealerCode: string, companyCode: string): Observable<any> {
    const params = new HttpParams()
      .set('DealerCode', dealerCode)
      .set('CompanyCode', companyCode);

    return this.http.get<any>(this.apiUrl, { params });
  }
}