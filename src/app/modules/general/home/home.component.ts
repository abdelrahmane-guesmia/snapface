import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name = 'Snapface';
  constructor(private router: Router) {}

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }
}
