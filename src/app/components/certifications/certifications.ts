import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialId?: string;
  verifyLink?: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.css'],
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2024',
      image: 'assets/certs/responsive_web_design.png',
      verifyLink: 'https://www.freecodecamp.org/certification/shreeganesha_k_v/responsive-web-design',
      isOpen: false
    },
    {
      title: 'SAFe 6.0',
      issuer: 'Scaled Agile',
      year: '2024',
      image: 'assets/certs/safe_practitioner.png',
      credentialId: '11553280-4530',
      isOpen: false
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2024',
      image: 'assets/certs/js_algo.png',
      verifyLink: 'https://www.freecodecamp.org/certification/shreeganesha_k_v/javascript-algorithms-and-data-structures-v8',
      isOpen: false
    }
  ];

  toggle(cert: Certification) {
    this.certifications.forEach(c => {
      if (c !== cert) c.isOpen = false; // only one open
    });
    cert.isOpen = !cert.isOpen;
  }
}
