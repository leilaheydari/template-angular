import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
    selector: 'app-panel-layout',
    templateUrl: './panel-layout.component.html',
    styleUrls: ['./panel-layout.component.scss'],
    standalone: true,
    imports: [HeaderComponent, NavigationComponent, RouterOutlet]
})
export class PanelLayoutComponent {

}
