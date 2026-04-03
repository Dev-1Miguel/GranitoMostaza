import { Component } from "@angular/core";
import { LoginComponent } from "../../sections/login-section/login/login.component";


@Component({
    selector: 'app-login-landing',
    templateUrl: './login-landing.component.html',
    styleUrl: './login-landing.component.css',
    imports: [LoginComponent],
    standalone: true
})
export class LoginLandingComponent {
    constructor() { }
}