import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FloatingBackButtonComponent } from '../../../components/floating-back-button/floating-back-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [RouterModule, FloatingBackButtonComponent]
})
export class LoginComponent {

}
