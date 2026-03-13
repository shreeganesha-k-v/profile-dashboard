import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  phone = "+91 9945154957";
  linkedIn = "https://www.linkedin.com/in/shreeganesha-k-v-3906121b3/";
  github = "https://github.com/shreeganesha-k-v";

  copyPhone() {
    navigator.clipboard.writeText(this.phone);
    alert("Phone number copied!");
  }

  viewResume() {
    window.open("assets/Shreeganesha_K_V_Resume.pdf", "_blank");
  }
}
