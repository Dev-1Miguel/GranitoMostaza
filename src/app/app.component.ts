import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CartMainSection } from "./features/cart/sections/cart-main-section";
import { CartService } from "./features/cart/services/cart.service";
import { FloatingCartButtonComponent } from "./shared/components/floating-cart-button/floating-cart-button.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, CartMainSection, FloatingCartButtonComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "granito-mostaza";
  public cartService = inject(CartService);
}
