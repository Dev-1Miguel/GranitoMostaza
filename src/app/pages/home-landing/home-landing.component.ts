import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainSectionComponent } from "../../sections/home-section/main-section/main-section";
import { SecondarySectionComponent } from "../../sections/home-section/secondary-section/secondary-section";

@Component({
    selector: 'app-home-landing',
    templateUrl: './home-landing.component.html',
    styleUrl: './home-landing.component.css',
    imports: [NavbarComponent, MainSectionComponent, SecondarySectionComponent],
    standalone: true
})
export class HomeLandingComponent {

}