import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './config/translate.config';

@Component({
  selector: 'app-core',
  styleUrls:['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              public translate: TranslateService,
              
            ) { 
  }

  ngOnInit() {
    // this.router.navigate(['/home']);;
  }
}
