import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bp-popup',
  standalone: false,
  templateUrl: './bp-popup.component.html',
  styleUrls: ['./bp-popup.component.scss'],
})
export class BpPopupComponent {
  @Input() visible = false;
  @Input() itemCode: string | null = null;
  @Input() message = '';

  @Output() closed = new EventEmitter<void>();

  constructor(private router: Router) {}

  close(): void {
    this.closed.emit();
  }

  goToOrderHistory(): void {
    this.closed.emit();
    this.router.navigate(['/my-account', 'orders']);
  }

  get showOrderHistoryButton(): boolean {
    return this.itemCode === '01';
  }
}