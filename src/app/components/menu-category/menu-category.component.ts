import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject
} from "@angular/core";
import { Product } from "../../models/product.interfaces";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-menu-category",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./menu-category.component.html",
  styleUrls: ["./menu-category.component.css"],
})
export class MenuCategoryComponent {
  @Input() title = "";
  @Input() items: Product[] = [];

  @Output() itemAdded = new EventEmitter<Product>();

  private cartService = inject(CartService);

  @ViewChild("track", { static: false }) trackRef!: ElementRef<HTMLDivElement>;

  animatingItems = new Set<number>();

  scroll(direction: "left" | "right"): void {
    if (!this.trackRef?.nativeElement) return;

    this.trackRef.nativeElement.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  }

  getQuantity(productId: number): number {
    return this.cartService.getItemQuantity(productId);
  }

  addToCart(item: Product): void {
    this.itemAdded.emit(item);
    
    // Trigger local animation
    this.animatingItems.add(item.id);
    setTimeout(() => {
      this.animatingItems.delete(item.id);
    }, 500);
  }

  isAnimating(itemId: number): boolean {
    return this.animatingItems.has(itemId);
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}