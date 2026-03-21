import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainSectionComponent } from "../../sections/home-section/main-section/main-section";
import { SecondarySectionComponent } from "../../sections/home-section/secondary-section/secondary-section";
import { ThirdSectionComponent } from "../../sections/home-section/third-section/third-section";
import { FourthSectionComponent } from "../../sections/home-section/fourth-section/fourth-section";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-home-landing',
    templateUrl: './home-landing.component.html',
    styleUrl: './home-landing.component.css',
    imports: [NavbarComponent, MainSectionComponent, SecondarySectionComponent, ThirdSectionComponent, FourthSectionComponent, FooterComponent],
    standalone: true
})
export class HomeLandingComponent {

}