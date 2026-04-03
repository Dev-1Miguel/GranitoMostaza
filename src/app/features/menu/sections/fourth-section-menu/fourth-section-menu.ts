import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";
import { Product } from "../../../../shared/models/product.interfaces";
import { CartService } from "../../../cart/services/cart.service";
import { MenuDataService } from "../../menu-data.service";

@Component({
  selector: "app-fourth-section-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./fourth-section-menu.html",
  styleUrls: ["./fourth-section-menu.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourthSectionMenuComponent {
  private readonly cartService = inject(CartService);
  private readonly menuDataService = inject(MenuDataService);

  allBebidas = toSignal(this.menuDataService.getCategoryItems("bebidas"), {
    initialValue: [] as Product[],
  });
  visibleBebidas = computed(() =>
    this.allBebidas().slice(0, this.itemsToShow())
  );
  itemsToShow = signal<number>(this.getInitialItemsToShow());
  readonly itemQuantities = this.cartService.quantityMap;

  showMore(): void {
    this.itemsToShow.update((n) => n + 5);
  }

  hasMore = computed(() => this.itemsToShow() < this.allBebidas().length);

  incrementQuantity(product: Product): void {
    this.cartService.addToCart(product);
  }

  decrementQuantity(product: Product): void {
    const qty = this.getQuantity(product.id);
    if (qty > 0) {
      this.cartService.updateQuantity(product.id, qty - 1);
    }
  }

  getQuantity(productId: number): number {
    return this.cartService.getItemQuantity(productId);
  }

  private getInitialItemsToShow(): number {
    return typeof window !== "undefined" && window.innerWidth < 640 ? 5 : 10;
  }
}
