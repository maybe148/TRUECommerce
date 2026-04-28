import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details-extra-info',
  standalone: false,
  templateUrl: './order-details-extra-info.component.html',
  styleUrls: ['./order-details-extra-info.component.scss'],
})
export class OrderDetailsExtraInfoComponent {
  salesOrder = '2222';
  deliveryOrder = '3333';
  billingNumber = '4444';
  paymentStatus = 'Paid';
  deliveryStatus = 'Pending';
  remark = 'ติดต่อ คุณหญิง 081-2345678 แนน';
}