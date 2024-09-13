import { Component } from '@angular/core';
import {TranslateSwitchComponent} from "../translate-switch/translate-switch.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    TranslateSwitchComponent,
    MatToolbar,
    MatSidenav,
    MatSidenavContainer
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
