import { Component } from "@angular/core";
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { MainSectionComponent } from "../../sections/main-section/main-section";
import { SecondarySectionComponent } from "../../sections/secondary-section/secondary-section";
import { ThirdSectionComponent } from "../../sections/third-section/third-section";
import { FourthSectionComponent } from "../../sections/fourth-section/fourth-section";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { FloatingHomeButtonComponent } from "../../../../shared/components/floating-home-button/floating-home-button.component";

@Component({
    selector: 'app-home-landing',
    templateUrl: './home-landing.component.html',
    styleUrl: './home-landing.component.css',
    imports: [NavbarComponent, MainSectionComponent, SecondarySectionComponent, ThirdSectionComponent, FourthSectionComponent, FooterComponent, FloatingHomeButtonComponent],
    standalone: true
})
export class HomeLandingComponent {

}
