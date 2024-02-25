import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mi-neverita';
  
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageService.DetectLanguage();
  }

  public goTo(url: string): void {
    this.router.navigate([url]);
  }
}




