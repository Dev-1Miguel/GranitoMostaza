import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-home-landing',
    templateUrl: './home-landing.component.html',
    styleUrl: './home-landing.component.css',
    imports: [NavbarComponent],
    standalone: true
})
export class HomeLandingComponent {

}