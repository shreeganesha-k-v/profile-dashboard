import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from './profile';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {
   profile = new Profile();
}
