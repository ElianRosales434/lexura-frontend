import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  showSidenav: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showSidenav = !['/login', '/create-account'].includes(this.router.url);
    });
  }
}