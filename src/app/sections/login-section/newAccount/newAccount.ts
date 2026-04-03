import { Component } from "@angular/core";

import { RouterModule } from '@angular/router';
import { FloatingBackButtonComponent } from '../../../components/floating-back-button/floating-back-button.component';

@Component({
    selector: 'app-newAccount',
    templateUrl: './newAccount.html',
    styleUrl: './newAccount.css',
    standalone: true,
    imports: [RouterModule, FloatingBackButtonComponent]
})
export class NewAccount {
    
}
