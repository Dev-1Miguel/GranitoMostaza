import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
// import { FooterComponent } from "../../components/footer/footer.component";
// import { FloatingHomeButtonComponent } from "../../components/floating-home-button/floating-home-button.component";

@Component({
  selector: 'app-menu-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent /*, FooterComponent, FloatingHomeButtonComponent*/],
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.css']
})
export class MenuLandingComponent {}
