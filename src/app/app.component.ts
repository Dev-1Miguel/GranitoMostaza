import { Component } from '@angular/core';
import { HomeLandingComponent } from "./pages/home-landing/home-landing.component";

@Component({
  selector: 'app-root',
  imports: [HomeLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'granito-mostaza';
}
