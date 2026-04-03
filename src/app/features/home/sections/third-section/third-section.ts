import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";

import { Product } from "../../../../shared/models/product.interfaces";
import { MenuCategoryComponent } from "../../../../shared/components/menu-category/menu-category.component";
import { FadeInDirective } from "../../../../shared/directives/fade-in.directive";
import { CartService } from "../../../cart/services/cart.service";
import { MenuDataService } from "../../../menu/menu-data.service";

@Component({
  selector: "app-third-section",
  standalone: true,
  imports: [MenuCategoryComponent, FadeInDirective],
  templateUrl: "./third-section.html",
  styleUrls: ["./third-section.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdSectionComponent {
  private readonly cartService = inject(CartService);
  private readonly menuDataService = inject(MenuDataService);

  postres = toSignal(this.menuDataService.getCategoryItems("postres"), {
    initialValue: [] as Product[],
  });
  desayunos = toSignal(this.menuDataService.getCategoryItems("desayunos"), {
    initialValue: [] as Product[],
  });

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
