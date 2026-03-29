import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CartService } from "../../services/cart.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [CommonModule, RouterModule],
    standalone: true
})
export class NavbarComponent {
    private cartService = inject(CartService);
    cartCount = this.cartService.totalItems;

    toggleCart(): void {
        this.cartService.toggleCart();
    }
}