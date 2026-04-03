import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CartMainSection } from "./sections/shopping-cart-section/cart-main-section";
import { CartService } from "./services/cart.service";
import { FloatingCartButtonComponent } from "./components/floating-cart-button/floating-cart-button.component";

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
