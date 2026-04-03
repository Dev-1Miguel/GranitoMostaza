import { Component } from "@angular/core";
import { FadeInDirective } from "../../../../shared/directives/fade-in.directive";

@Component({
    selector: 'app-secondary-section',
    imports: [FadeInDirective],
    standalone: true,
    templateUrl: './secondary-section.html',
    styleUrls: ['./secondary-section.css']
})
export class SecondarySectionComponent {

}
