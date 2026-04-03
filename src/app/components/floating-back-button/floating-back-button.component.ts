import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-back-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-back-button.component.html',
  styleUrl: './floating-back-button.component.css',
})
export class FloatingBackButtonComponent {
  private router = inject(Router);

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
