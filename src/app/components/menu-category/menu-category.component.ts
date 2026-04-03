import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCategoryComponent {
  @Input() title = "";
  @Input() items: Product[] = [];

  @Output() itemAdded = new EventEmitter<Product>();

  private cartService = inject(CartService);

  @ViewChild("track", { static: false }) trackRef!: ElementRef<HTMLDivElement>;
  readonly quantityMap = this.cartService.quantityMap;

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

  incrementQuantity(item: Product): void {
    this.itemAdded.emit(item);
  }

  decrementQuantity(item: Product): void {
    const currentQty = this.getQuantity(item.id);
    if (currentQty > 0) {
      this.cartService.updateQuantity(item.id, currentQty - 1);
    }
  }
  trackById(index: number, item: Product): number {
    return item.id;
  }
}
