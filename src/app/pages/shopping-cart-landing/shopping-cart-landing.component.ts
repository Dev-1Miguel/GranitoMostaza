import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CartMainSection } from "../../sections/shopping-cart-section/cart-main-section";

@Component({
    selector: 'app-shopping-cart-landing',
    templateUrl: './shopping-cart-landing.component.html',
    styleUrls: ['./shopping-cart-landing.component.css'],
    standalone: true,
    imports: [CommonModule, NavbarComponent, CartMainSection]
})
export class ShoppingCartLandingComponent{


}