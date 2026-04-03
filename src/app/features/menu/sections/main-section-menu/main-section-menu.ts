import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from "@angular/core";
import { CarouselItem, CarouselResponse } from "./interfaces/carouselItem.interfaces";
import { CarouselService } from "./services/carousel.service";

@Component({
  selector: "app-main-section-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./main-section-menu.html",
  styleUrls: ["./main-section-menu.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionMenuComponent implements OnInit, OnDestroy {
  private readonly carouselService = inject(CarouselService);
  private readonly ngZone = inject(NgZone);
  private autoSlideInterval?: ReturnType<typeof setInterval>;
  private touchStartX: number | null = null;
  private touchCurrentX: number | null = null;
  private readonly swipeThreshold = 50;

  items = signal<CarouselItem[]>([]);
  currentIndex = signal(0);
  activeItem = computed(() => this.items()[this.currentIndex()] ?? null);
  translateX = computed(() => `translateX(-${this.currentIndex() * 100}%)`);
  ngOnInit(): void {
    this.loadCarouselItems();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  loadCarouselItems(): void {
    this.carouselService.getCarouselItems().subscribe({
      next: (response: CarouselResponse) => {
        this.items.set(response.carouselItems);
      },
      error: (error: unknown) => {
        console.error("Error cargando el carrusel:", error);
      },
    });
  }

  startAutoSlide(): void {
    this.stopAutoSlide();

    this.ngZone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        this.ngZone.run(() => this.next());
      }, 5000);
    });
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = undefined;
    }
  }

  next(): void {
    const total = this.items().length;
    if (total <= 1) return;
    this.currentIndex.update((index) => (index + 1) % total);
  }

  prev(): void {
    const total = this.items().length;
    if (total <= 1) return;
    this.currentIndex.update((index) => (index - 1 + total) % total);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
    this.startAutoSlide();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0]?.clientX ?? null;
    this.touchCurrentX = this.touchStartX;
    this.stopAutoSlide();
  }

  onTouchMove(event: TouchEvent): void {
    this.touchCurrentX = event.touches[0]?.clientX ?? this.touchCurrentX;
  }

  onTouchEnd(): void {
    if (this.touchStartX === null || this.touchCurrentX === null) {
      this.resetTouchState();
      this.startAutoSlide();
      return;
    }

    const deltaX = this.touchCurrentX - this.touchStartX;

    if (Math.abs(deltaX) >= this.swipeThreshold) {
      if (deltaX < 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.resetTouchState();
    this.startAutoSlide();
  }

  onCtaClick(item: CarouselItem | null | undefined): void {
    const sectionId = this.getTargetSectionId(item);
    const target = sectionId ? document.getElementById(sectionId) : null;

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  private getTargetSectionId(item: CarouselItem | null | undefined): string | null {
    if (!item) return null;

    const title = item.title.toLowerCase();

    if (title.includes("postre")) return "menu-postres";
    if (title.includes("desayuno")) return "menu-desayunos";
    if (title.includes("bebida")) return "menu-bebidas";

    return "menu-postres";
  }

  private resetTouchState(): void {
    this.touchStartX = null;
    this.touchCurrentX = null;
  }
}
