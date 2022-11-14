import { Component } from '@angular/core';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoggedIn = false;
  title = 'frontend';

  constructor(private authService:AuthenticationService){}

  ngOnInit():void{
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }
}
