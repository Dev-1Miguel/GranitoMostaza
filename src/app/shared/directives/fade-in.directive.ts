import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit {
  @Input() appFadeInDelay: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;

    // Estado inicial: invisible y desplazado hacia abajo
    nativeEl.style.opacity = '0';
    nativeEl.style.transform = 'translateY(40px)';
    nativeEl.style.transition = `opacity 0.7s ease ${this.appFadeInDelay}ms, transform 0.7s ease ${this.appFadeInDelay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nativeEl.style.opacity = '1';
            nativeEl.style.transform = 'translateY(0)';
            observer.unobserve(nativeEl); // Solo animar una vez
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(nativeEl);
  }
}
