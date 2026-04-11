import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialId: string;
  verifyLink: string;
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
      credentialId: 'FCC-12345',
      verifyLink: 'https://www.freecodecamp.org/certification/shreeganesha_k_v/responsive-web-design',
      isOpen: false
    },
    {
      title: 'SAFe 6.0',
      issuer: 'Scaled Agile',
      year: '2024',
      image: 'assets/certs/safe.png',
      credentialId: 'SAFE-67890',
      verifyLink: 'https://scaledagile.com',
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
