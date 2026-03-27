import { Component, inject, signal, OnInit, OnDestroy } from "@angular/core";
import { CarouselService } from "./services/carousel.service";
import { CarouselItem } from "./interfaces/carouselItem.interfaces";

@Component({
  selector: 'app-main-section-menu',
  templateUrl: './main-section-menu.html',
  styleUrls: ['./main-section-menu.css']
})
export class MainSectionMenuComponent implements OnInit, OnDestroy {
  private readonly carouselService = inject(CarouselService);
  private autoSlideInterval?: any;

  items = signal<CarouselItem[]>([]);
  currentIndex = signal(0);

  ngOnInit(): void {
    this.loadCarouselItems();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  loadCarouselItems(): void {
    this.carouselService.getCarouselItems().subscribe({
      next: (response) => {
        this.items.set(response.carouselItems);
      },
      error: (error) => {
        console.error('Error cargando el carrusel:', error);
      }
    });
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  next(): void {
    const total = this.items().length;
    if (total <= 1) return;
    this.currentIndex.update(index => (index + 1) % total);
  }

  prev(): void {
    const total = this.items().length;
    if (total <= 1) return;
    this.currentIndex.update(index => (index - 1 + total) % total);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
    this.startAutoSlide(); // Reset timer on manual navigation
  }

  translateX(): string {
    return `translateX(-${this.currentIndex() * 100}%)`;
  }
}