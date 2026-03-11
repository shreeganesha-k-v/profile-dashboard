import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  phone = "+91 9945154957";

  copyPhone() {
    navigator.clipboard.writeText(this.phone);
    alert("Phone number copied!");
  }

  downloadResume() {
    window.open("assets/Shreeganesha_K_V_Resume.pdf", "_blank");
  }
}
