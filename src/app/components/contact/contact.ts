import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  phone = "+91 9945154957";
  linkedIn = "https://www.linkedin.com/in/shreeganesha-k-v-3906121b3/";
  github = "https://github.com/shreeganesha-k-v";
  copied = false;

  constructor(private cdr: ChangeDetectorRef) {}

  copyPhone() {
    navigator.clipboard.writeText(this.phone).then(() => {
      this.copied = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.copied = false;
        this.cdr.detectChanges();
      }, 2000);
    });
  }

  viewResume() {
    window.open("assets/Shreeganesha_K_V_Resume.pdf", "_blank");
  }
}
