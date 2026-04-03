import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CartService } from "../../../features/cart/services/cart.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, RouterModule],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    private cartService = inject(CartService);
    cartCount = this.cartService.totalItems;
    isMenuOpen = false;

    toggleCart(): void {
        this.cartService.toggleCart();
        this.isMenuOpen = false; // Cierra el menú si se abre el carrito
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }
}
