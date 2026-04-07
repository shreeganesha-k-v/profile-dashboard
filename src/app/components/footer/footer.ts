import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/shreeganesha-k-v', icon: 'bi bi-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shreeganesha-k-v-3906121b3/', icon: 'bi bi-linkedin' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Shreeganesha_K_V/', icon: 'bi bi-code-slash' }
  ];

  quickLinks = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
