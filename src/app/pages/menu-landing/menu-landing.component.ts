import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainSectionMenuComponent } from "../../sections/menu-section/main-section-menu/main-section-menu";
import { SecondarySectionMenuComponent } from "../../sections/menu-section/secondary-section-menu/secondary-section-menu";
import { ThirdSectionMenuComponent } from "../../sections/menu-section/third-section-menu/third-section-menu";
import { FourthSectionMenuComponent } from "../../sections/menu-section/fourth-section-menu/fourth-section-menu";
import { FooterComponent } from "../../components/footer/footer.component";
import { FloatingHomeButtonComponent } from "../../components/floating-home-button/floating-home-button.component";

@Component({
  selector: 'app-menu-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, FloatingHomeButtonComponent,
    MainSectionMenuComponent, SecondarySectionMenuComponent, ThirdSectionMenuComponent, FourthSectionMenuComponent],
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.css']
})
export class MenuLandingComponent {}
