import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-home-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-home-button.component.html',
  styleUrl: './floating-home-button.component.css',
})
export class FloatingHomeButtonComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible = window.scrollY > 250;
  }

  goToHome(): void {
    const homeSection = document.getElementById('home');

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}