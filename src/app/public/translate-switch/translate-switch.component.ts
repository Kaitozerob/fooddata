import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-translate-switch',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './translate-switch.component.html',
  styleUrl: './translate-switch.component.css'
})
export class TranslateSwitchComponent {

  currentLang = 'en';
  languages = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
