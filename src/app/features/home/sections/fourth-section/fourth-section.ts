import { Component } from "@angular/core";
import { FadeInDirective } from "../../../../shared/directives/fade-in.directive";

@Component({
    selector: 'app-fourth-section',
    standalone: true,
    imports: [FadeInDirective],
    templateUrl: './fourth-section.html',
    styleUrl: './fourth-section.css'
})
export class FourthSectionComponent {
    
}
